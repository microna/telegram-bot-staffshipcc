const { mainButtons } = require('../../Components/Buttons');

module.exports = (app, bot) => {
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
  });
};
