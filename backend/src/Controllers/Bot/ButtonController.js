const { mainButtons } = require('../../Components/Buttons');
const {
  saveProduct,
  updateProductTotalAmount,
  updateProductInfo,
} = require('../../Storages/ProductStorage');
const { dateForErrorLog } = require('../../utils/formatDate');

// const info = {
//   yourMsg: 'Ваше сообщение отправлено администратору.',
//   recipient: 'отримувач',
// };
let states = {};
module.exports = (app, bot, logger) => {
  try {
    bot.on('text', async (msg) => {
      const { chat } = msg;

      const exitButton = 'Вийти з додавання';
      console.log(states);
      if (msg.text === exitButton) {
        delete states[msg.from.id];
        delete states[msg.from.id + `id`];
      }
      if (msg.text === 'Додати посилку') {
        bot
          .sendMessage(msg.from.id, 'Введіть трек намбер: ', {
            reply_to_message_id: msg.message_id,
            reply_markup: {
              force_reply: true,
              selective: true,
            },
          })
          .then(() => {
            states[msg.from.id] = 1;
          });
      }

      if (states[msg.from.id] == 1) {
        const result = await saveProduct({
          trackNumber: msg.text,
          userTGId: msg.from.id,
          userTGNick: msg.from.username,
        });

        if (result) {
          bot
            .sendMessage(msg.from.id, 'Введіть емаунт: ', {
              reply_to_message_id: msg.message_id,
              reply_markup: {
                force_reply: true,
                selective: true,
              },
            })
            .then(() => {
              states[msg.from.id] = 2;
              states[msg.from.id + `id`] = result._id.toString();
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error save to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }
      if (states[msg.from.id] == 2) {
        const result = await updateProductTotalAmount({
          _id: states[msg.from.id + `id`],
          totalAmount: msg.text,
        });
        if (result) {
          bot
            .sendMessage(msg.from.id, 'Введіть інфо: ', {
              reply_to_message_id: msg.message_id,
              reply_markup: {
                force_reply: true,
                selective: true,
              },
            })
            .then(() => {
              states[msg.from.id] = 3;
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error update amount to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }
      if (states[msg.from.id] == 3) {
        const result = await updateProductInfo({
          _id: states[msg.from.id + `id`],
          info: msg.text,
        });
        if (result) {
          bot
            .sendMessage(msg.from.id, 'Посилка додана! Чекайте відповідьи ', {
              reply_to_message_id: msg.message_id,
              reply_markup: {
                force_reply: true,
                selective: true,
              },
            })
            .then(() => {
              delete states[msg.from.id];
              delete states[msg.from.id + `id`];
              // states[msg.chat.id] = 0;
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error update info to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }

      if (msg.text === '🤑Тарифы') {
        await bot.sendMessage(chat.id, `TODO Информация по тарифам...`, {
          parse_mode: 'HTML',
        });
      }
      if (msg.text === '📜Правила') {
        await bot.sendMessage(chat.id, `TODO Информация по правилам...`, {
          parse_mode: 'HTML',
        });
      }
      if (msg.text === '✏️Написать нам') {
        await bot.sendMessage(chat.id, `TODO написать нам...`, {
          parse_mode: 'HTML',
        });
      }
      if (msg.text === '🔥Канал') {
        await bot.sendMessage(chat.id, `TODO наш канал...`, {
          parse_mode: 'HTML',
        });
      }
      if (msg.text == '❌ Закрыть меню') {
        await bot.sendMessage(chat.id, 'Меню закрыто', {
          reply_markup: {
            remove_keyboard: true,
          },
        });
      }
      if (msg.text == 'На главную') {
        await bot.sendMessage(chat.id, 'На главную', {
          reply_markup: {
            keyboard: mainButtons,
            resize_keyboard: true,
          },
        });
      }
    });
  } catch (e) {
    logger.error(`${dateForErrorLog()} -- Button controller error`);
    console.log('Button controller error');
  }
};
