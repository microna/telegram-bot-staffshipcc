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
          result
            .sort((a, b) => a.updatedAt - b.updatedAt)
            .forEach((product) => {
              console.log(product._id);
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
      }
      // Listen for callback queries
      bot.on('callback_query', async (callbackQuery) => {
        const { data } = callbackQuery;
        const [productId, action] = data.split(':');

        const changeProductStatus = async ({ id, status, message }) => {
          const result = await updateProductGeneral({ status, id });
          await bot.sendMessage(result.userTGId, `${message} \n${result.productText}`, {});
        };

        switch (action) {
          case Status.OnReview:
            console.log(Status.OnReview);
            changeProductStatus({ id: productId, status: action, message: 'Заказ в работе: ' });
            break;
          case Status.ToEdit:
            console.log(Status.ToEdit);
            changeProductStatus({
              id: productId,
              status: action,
              message: 'Заказ нужно исправить: ',
            });
            break;
          case Status.Reject:
            console.log(Status.Reject);
            changeProductStatus({
              id: productId,
              status: action,
              message: 'Заказ отменен: ',
            });
            break;
          default:
            console.log('default');
        }

        console.log(productId, action);
      });
    } catch (err) {
      console.log('err');
    }
  });
};
