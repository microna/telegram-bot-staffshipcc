const { adminButtons } = require('../../Components/Buttons');
const { Status } = require('../../Components/Status');
const {
  getProductsGeneralByStatus,
  updateProductGeneral,
} = require('../../Storages/ProductGeneral');

module.exports = (app, bot) => {
  const adminId = process.env.ADMIN_ID;
  bot.on('text', async (msg) => {
    try {
      if (+msg.from.id === +adminId) {
        if (msg.text == '/admin') {
          await bot.sendMessage(msg.chat.id, `Заказы`, {
            reply_markup: {
              keyboard: adminButtons,
              resize_keyboard: true,
            },
          });
        }
      }
    } catch (err) {
      console.log('err');
    }
  });

  bot.on('text', async (msg) => {
    try {
      const { from } = msg;
      if (+from.id === +adminId) {
        if (msg.text == 'Заказы в работе') {
          const status = Status.New;
          const result = await getProductsGeneralByStatus({ status });
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

            // Create a unique callback data for each product
            const callbackData = `${product._id}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: 'В работе',
                      callback_data: `${callbackData}:${Status.OnReview}`,
                    },
                  ],
                  [
                    {
                      text: 'На доработку',
                      callback_data: `${callbackData}:${Status.ToEdit}`,
                    },
                  ],
                  [
                    {
                      text: 'Отмена',
                      callback_data: `${callbackData}:${Status.Reject}`,
                    },
                  ],
                ],
              },
            });
          });
        }

        if (msg.text == 'Заказы на доработку') {
          const status = Status.ToEdit;
          const result = await getProductsGeneralByStatus({ status });
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {},
            });
          });
        }

        if (msg.text == 'Отмененные заказы') {
          const status = Status.Reject;
          const result = await getProductsGeneralByStatus({ status });
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {},
            });
          });
        }
        if (msg.text == 'Новие закази') {
          const status = Status.New;
          const result = await getProductsGeneralByStatus({ status });
          result.forEach((product) => {
            const productText = `${product.productText}\n${product.updatedAt}`;

            bot.sendMessage(adminId, productText, {
              reply_markup: {},
            });
          });
        }
      }

      // Listen for callback queries
      bot.on('callback_query', async (callbackQuery) => {
        const { data } = callbackQuery;
        const [productId, action] = data.split(':');

        const changeProductStatus = async ({ id, status, message }) => {
          const result = await updateProductGeneral({ status, id });
          await bot.sendMessage(result.userTGId, `${message} \n${result.productText}`, {});
        };

        // switch (action) {
        //   case Status.OnReview:
        //     console.log(Status.OnReview);
        //     changeProductStatus({ id: productId, status: action, message: 'Заказ в работе: ' });
        //     break;
        //   case Status.ToEdit:
        //     console.log(Status.ToEdit);
        //     changeProductStatus({
        //       id: productId,
        //       status: action,
        //       message: 'Заказ нужно исправить: ',
        //     });
        //     break;
        //   case Status.Reject:
        //     console.log(Status.Reject);
        //     changeProductStatus({
        //       id: productId,
        //       status: action,
        //       message: 'Заказ отменен: ',
        //     });
        //     break;
        //   default:
        //     console.log('default');
        // }
        console.log(action);
        if (action === Status.OnReview) {
          console.log(Status.OnReview);
          changeProductStatus({ id: productId, status: action, message: 'Заказ в работе: ' });
        }
      });
    } catch (err) {
      console.log('err');
    }
  });
};
