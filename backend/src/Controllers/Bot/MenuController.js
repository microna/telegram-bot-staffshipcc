const { mainButtons, adminButtons } = require('../../Components/Buttons');

module.exports = (app, bot) => {
  try {
    const adminId = process.env.ADMIN_ID;
    bot.on('text', async (msg) => {
      if (msg.text === '/menu') {
        await bot.sendMessage(msg.chat.id, `Меню бота`, {
          reply_markup: {
            keyboard: mainButtons,
            resize_keyboard: true,
          },
        });
      }

      if (msg.text === '/help') {
        await bot.sendMessage(msg.chat.id, `TODO Связаться с администрацией`);
      }
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
    });
  } catch (e) {
    console.log('error menu');
  }
};
