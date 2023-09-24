const { productButtons } = require('../../Components/Buttons');
const { Status } = require('../../Components/Status');
const {
  getProductsByStatus,
  updateProduct,
} = require('../../Storages/ProductStorage');
const { changeProductText } = require('../../utils/changeProductText');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot) => {
  try {
    const adminId = process.env.ADMIN_ID;

    bot.on('text', async (msg) => {
      try {
        const { from } = msg;
        if (+from.id === +adminId) {
          // if (msg.text.toString().includes(Status.Reject)) {
          //   const status = Status.Reject;
          //   // const { text } = msg;
          //   const result = await updateProductStatus({
          //     id: '',
          //     status,
          //   });
          //   bot.sendMessage(
          //     result.userTGId,
          //     `Админ отменил вашу посылку: \n${result.trackNumber} По причине: ${''}`,
          //     {
          //       reply_markup: {},
          //     },
          //   );
          //   bot.sendMessage(adminId, 'Сообщение пользователю отправлено', {
          //     reply_markup: {},
          //   });
          // }

          if (msg.text == '🛠Заказы в работе') {
            const status = Status.OnReview;
            const result = await getProductsByStatus({ status });
            if (result.length <= 0) {
              bot.sendMessage(adminId, 'Пусто', {
                reply_markup: {},
              });
            }
            result.forEach((product) => {
              const productText = changeProductText(product);

              // Create a unique callback data for each product
              const callbackData = `${product._id}`;

              bot.sendMessage(adminId, productText, {
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
              });
            });
          }

          // if (msg.text == 'Заказы в работе') {
          //   const status = Status.OnReview;
          //   const result = await getProductsGeneralByStatus({ status });
          //   if (result.length <= 0) {
          //     bot.sendMessage(adminId, 'Пусто', {
          //       reply_markup: {},
          //     });
          //   }
          //   result.forEach((product) => {
          //     const productText = `${product.productText}\n${product.updatedAt}`;

          //     bot.sendMessage(adminId, productText, {
          //       reply_markup: {},
          //     });
          //   });
          // }

          if (msg.text == '📌Заказы на доработку') {
            const status = Status.ToEdit;
            const result = await getProductsByStatus({ status });
            if (result.length <= 0) {
              bot.sendMessage(adminId, 'Пусто', {
                reply_markup: {},
              });
            }
            result.forEach((product) => {
              const productText = changeProductText(product);

              bot.sendMessage(adminId, productText, {
                reply_markup: {},
              });
            });
          }

          if (msg.text == '❌Отмененные заказы') {
            const status = Status.Reject;
            const result = await getProductsByStatus({ status });
            if (result.length <= 0) {
              bot.sendMessage(adminId, 'Пусто', {
                reply_markup: {},
              });
            }
            result.forEach((product) => {
              const productText = changeProductText(product);

              bot.sendMessage(adminId, productText, {
                reply_markup: {},
              });
            });
          }
          if (msg.text == '✅Новие закази') {
            const status = Status.New;
            const result = await getProductsByStatus({ status });
            if (result.length <= 0) {
              bot.sendMessage(adminId, 'Пусто', {
                reply_markup: {},
              });
            }
            result.forEach((product) => {
              const productText = changeProductText(product);

              // Create a unique callback data for each product

              bot.sendMessage(adminId, productText, {
                reply_markup: {
                  inline_keyboard: [...productButtons(product._id, Status)],
                },
              });
            });
          }
          if (msg.text == '🧙🏼‍♂️Архив') {
            const status = Status.Archive;
            const result = await getProductsByStatus({ status });
            if (result.length <= 0) {
              bot.sendMessage(adminId, 'Пусто', {
                reply_markup: {},
              });
            }
            result.forEach((product) => {
              const productText = changeProductText(product);

              bot.sendMessage(adminId, productText, {
                reply_markup: {},
              });
            });
          }
        }
      } catch (err) {
        console.log('err admin controller');
      }
    });
    // Listen for callback queries
    bot.on('callback_query', async (callbackQuery) => {
      try {
        const { data } = callbackQuery;
        const [productId, action] = data.split(':');
        console.log(action);
        const changeProductStatus = async ({ id, status, message }) => {
          const result = await updateProduct({ status, id });
          if (status !== Status.Archive) {
            const sendMessage = await sendMessageToUser({
              bot,
              userId: result.userTGId,
              message: `${message} \n${result.trackNumber}`,
            });

            if (!sendMessage) {
              await sendMessageToUser({
                bot,
                userId: adminId,
                message: 'Пользователь удалил чат с ботом, сообщеніе ему не било доставлено',
              });
            }
          }
          if (status === Status.Reject || status === Status.ToEdit) {
            // const id = await getProductById({ id });
            await bot.sendMessage(
              adminId,
              `${id},${status}: Вы изминили статус на ${status}, для посылки ${id}  `,
              {},
            );
          } else {
            await bot.sendMessage(adminId, `Продукт добавлен в статус: ${status}`, {});
          }
        };

        switch (action) {
          case Status.OnReview:
            changeProductStatus({ id: productId, status: action, message: 'Заказ в работе: ' });
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
        console.log('callback_query error');
      }
    });
  } catch (e) {
    console.log('admin controller error');
  }
};
