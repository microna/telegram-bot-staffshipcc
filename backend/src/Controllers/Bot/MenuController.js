const { mainButtons, adminButtons } = require('../../Components/Buttons');
const { dateForErrorLog } = require('../../utils/formatDate');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot, logger) => {
  try {
    const adminId = process.env.ADMIN_ID;
    bot.on('text', async (msg) => {
      if (msg.text === '/menu') {
        await sendMessageToUser({
          bot,
          userId: msg.chat.id,
          message: `Меню бота`,
          options: {
            reply_markup: {
              keyboard: mainButtons,
              resize_keyboard: true,
            },
          },
        });
      }

      if (msg.text === '/help') {
        await sendMessageToUser({
          bot,
          userId: msg.chat.id,
          message: `TODO Связаться с администрацией`,
          options: {},
        });
      }
      if (+msg.from.id === +adminId) {
        if (msg.text == '/admin') {
          await sendMessageToUser({
            bot,
            userId: msg.chat.id,
            message: `Заказы`,
            options: {
              reply_markup: {
                keyboard: adminButtons,
                resize_keyboard: true,
              },
            },
          });
        }
      }
    });
  } catch (e) {
    logger.error(`${dateForErrorLog()} -- Error open menu`);
    console.log('error menu');
  }
};
