const { mainButtons } = require('../../Components/Buttons');

module.exports = (app, bot) => {
  const adminId = process.env.ADMIN_ID;
  bot.on('text', async (msg) => {
    const { chat, message_id, text } = msg;
    if (text.startsWith('Отримувач - ') && text.toString().toLowerCase().includes('+380')) {
      // Уведомьте клиента, что сообщение отправлено администратору
      await bot.sendMessage(chat.id, 'Ваше сообщение отправлено администратору.', {
        reply_markup: {
          keyboard: [['Редактировать посилку', 'На главную']],
          resize_keyboard: true,
        },
      });

      // Перешлите сообщение администратору
      await bot.forwardMessage(adminId, chat.id, message_id);
    }
    if (msg.text === 'Додати посилку' || msg.text === 'Редактировать посилку') {
      await bot.sendMessage(
        chat.id,
        `
        Вам нужно написать о товаре в таком виде:
        Отримувач - Віктор Чернусь
        +380973180575
        
        NP20000002685128NPG
        
        
        New Balance 1906R - 110 євро - 4 пари
        https://www.jdsports.de/product/grau-new-balance-1906r-damen/19286423_jdsportsde/`,
        {},
      );
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
};
