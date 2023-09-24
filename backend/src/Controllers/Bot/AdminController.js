const { productButtons } = require('../../Components/Buttons');
const { Status } = require('../../Components/Status');
const {
  getProductsGeneralByStatus,
  updateProductGeneral,
} = require('../../Storages/ProductGeneralStorage');
const { updateProductStatus } = require('../../Storages/ProductStorage');

module.exports = (app, bot) => {
  const adminId = process.env.ADMIN_ID;

  bot.on('text', async (msg) => {
    try {
      const { from } = msg;
      if (+from.id === +adminId) {
        if (msg.text.toString().includes(Status.Reject)) {
          const { text } = msg;
          const result = await updateProductStatus({
            id: '',
            status,
          });
          bot.sendMessage(
            result.userTGId,
            `Админ отменил вашу посылку: \n${result.productText} По причине: ${message}`,
            {
              reply_markup: {},
            },
          );
          bot.sendMessage(adminId, 'Сообщение пользователю отправлено', {
            reply_markup: {},
          });
        }

        if (msg.text == '🛠Заказы в работе') {
          const status = Status.OnReview;
          const result = await getProductsGeneralByStatus({ status });
          if (result.length <= 0) {
            bot.sendMessage(adminId, 'Пусто', {
              reply_markup: {},
            });
          }
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

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
          const result = await getProductsGeneralByStatus({ status });
          if (result.length <= 0) {
            bot.sendMessage(adminId, 'Пусто', {
              reply_markup: {},
            });
          }
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}\nкомментарии администратора: \n${product.comments}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {},
            });
          });
        }

        if (msg.text == '❌Отмененные заказы') {
          const status = Status.Reject;
          const result = await getProductsGeneralByStatus({ status });
          if (result.length <= 0) {
            bot.sendMessage(adminId, 'Пусто', {
              reply_markup: {},
            });
          }
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {},
            });
          });
        }
        if (msg.text == '✅Новие закази') {
          const status = Status.New;
          const result = await getProductsGeneralByStatus({ status });
          if (result.length <= 0) {
            bot.sendMessage(adminId, 'Пусто', {
              reply_markup: {},
            });
          }
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

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
          const result = await getProductsGeneralByStatus({ status });
          if (result.length <= 0) {
            bot.sendMessage(adminId, 'Пусто', {
              reply_markup: {},
            });
          }
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

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
        const result = await updateProductGeneral({ status, id });
        if (status !== Status.Archive) {
          await bot.sendMessage(result.userTGId, `${message} \n${result.productText}`, {
            reply_markup: {
              force_reply: true,
            },
          });
        }
        if (status === Status.Reject || status === Status.ToEdit) {
          // const id = await getProductById({ id });
          await bot.sendMessage(
            adminId,
            `${id},${status}: Вы хотите изменить статус на ${status}, для посылки ${id} Напишите причину. Напишите Причина и далее текст `,
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
};
