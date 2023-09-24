const { mainButtons, adminButtons } = require('../../Components/Buttons');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot) => {
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
    console.log('error menu');
  }
};
