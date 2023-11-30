const { productButtons } = require('../../Components/Buttons');
const { Status } = require('../../Components/Status');
const { getProductsByStatus, updateProduct } = require('../../Storages/ProductStorage');
const { changeProductText } = require('../../utils/changeProductText');
const { convertStatusMsg } = require('../../utils/convertStatus');
const { dateForErrorLog } = require('../../utils/formatDate');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot, logger) => {
  const adminId = process.env.ADMIN_ID;

  bot.on('text', async (msg) => {
    try {
      const { from } = msg;
      if (+from.id === +adminId) {
        if (msg.text == '🛠Заказы в работе') {
          const status = Status.OnReview;
          const result = await getProductsByStatus({ status });
          if (result.length <= 0) {
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: 'Пусто',
              options: {},
            });
          }
          result.forEach(async (product) => {
            const productText = changeProductText(product);

            // Create a unique callback data for each product
            const callbackData = `${product._id}`;

            await sendMessageToUser({
              bot,
              userId: adminId,
              message: productText,
              options: {
                reply_markup: {
                  inline_keyboard: [
                    ...productButtons(product._id, Status),
                    product.status === Status.OnReview && [
                      {
                        text: 'В архив',
                        callback_data: `${callbackData}:${Status.Archive}`,
                      },
                    ],
                  ],
                },
              },
            });
          });
        }

        if (msg.text == '📌Заказы на доработку') {
          const status = Status.ToEdit;
          const result = await getProductsByStatus({ status });
          if (result.length <= 0) {
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: 'Пусто',
              options: {},
            });
          }
          result.forEach(async (product) => {
            const productText = changeProductText(product);

            await sendMessageToUser({
              bot,
              userId: adminId,
              message: productText,
              options: {
                reply_markup: {
                  inline_keyboard: [...productButtons(product._id, Status)],
                },
              },
            });
          });
        }

        if (msg.text == '❌Отмененные заказы') {
          const status = Status.Reject;
          const result = await getProductsByStatus({ status });
          if (result.length <= 0) {
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: 'Пусто',
              options: {},
            });
          }
          result.forEach(async (product) => {
            const productText = changeProductText(product);

            await sendMessageToUser({
              bot,
              userId: adminId,
              message: productText,
              options: {
                reply_markup: {
                  inline_keyboard: [...productButtons(product._id, Status)],
                },
              },
            });
          });
        }
        if (msg.text == '✅Новие закази') {
          const status = Status.New;
          const result = await getProductsByStatus({ status });
          if (result.length <= 0) {
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: 'Пусто',
              options: {},
            });
          }
          result.forEach(async (product) => {
            const productText = changeProductText(product);

            // Create a unique callback data for each product
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: productText,
              options: {
                reply_markup: {
                  inline_keyboard: [...productButtons(product._id, Status)],
                },
              },
            });
          });
        }
        if (msg.text == '🧙🏼‍♂️Архив') {
          const status = Status.Archive;
          const result = await getProductsByStatus({ status });
          if (result.length <= 0) {
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: 'Пусто',
              options: {},
            });
          }
          result.forEach(async (product) => {
            const productText = changeProductText(product);
            await sendMessageToUser({
              bot,
              userId: adminId,
              message: productText,
              options: {
                reply_markup: {
                  inline_keyboard: [...productButtons(product._id, Status)],
                },
              },
            });
          });
        }
      }
    } catch (err) {
      logger.error(`${dateForErrorLog()} -- Error admin controller`);
      console.log('err admin controller');
    }
  });
  // Listen for callback queries
  bot.on('callback_query', async (callbackQuery) => {
    try {
      const { data } = callbackQuery;
      const [productId, action] = data.split(':');
      const changeProductStatus = async ({ id, status, message }) => {
        const result = await updateProduct({ status, id });
        const convertedStatus = convertStatusMsg(status);

        if (status !== Status.Archive) {
          await sendMessageToUser({
            bot,
            userId: result.userTGId,
            userTGNick: result.userTGNick,
            message: `${message} \n${result.trackNumber}`,
          });
        }
        if (status === Status.Reject || status === Status.ToEdit) {
          // const id = await getProductById({ id });

          await sendMessageToUser({
            bot,
            userId: adminId,
            message: `${id},${status}: Вы изминили статус на ${convertedStatus}, для посылки ${id}  `,
            options: {},
          });
        } else {
          console.log('convertedStatus', convertedStatus, 'status', status);
          await sendMessageToUser({
            bot,
            userId: adminId,
            message: `Продукт добавлен в статус: ${convertedStatus}`,
            options: {},
          });
        }
      };

      switch (action) {
        case Status.OnReview:
          changeProductStatus({
            id: productId,
            status: action,
            message: 'Заказ в работе: ',
          });
          break;
        case Status.ToEdit:
          changeProductStatus({
            id: productId,
            status: action,
            message: 'Заказ нужно исправить: ',
          });
          break;
        case Status.Reject:
          changeProductStatus({
            id: productId,
            status: action,
            message: 'Заказ отменен: ',
          });
          break;
        case Status.Archive:
          changeProductStatus({
            id: productId,
            status: action,
            message: 'Заказ добавлен в архив: ',
          });
          break;
        default:
          console.log('default');
      }
    } catch (err) {
      logger.error(`${dateForErrorLog()} -- callback query error`);
      console.log('callback_query error');
    }
  });
};
