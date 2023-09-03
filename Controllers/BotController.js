const Product = require('../Modules/Product.model.js');

module.exports = (app, bot) => {
  const admin = process.env.ADMIN_ID;
  // Matches "/echo [whatever]"
  bot.onText(/\/start/, async (msg, match) => {
    try {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

      if (msg.text === '/start') {
        await bot.sendMessage(msg.chat.id, `Вітаю! `);
        await bot.sendMessage(msg.chat.id, `${match} match `);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', async (msg) => {
    try {
      const chatId = msg.chat.id;
      console.log(msg.from.id, msg.from.username);
      // send a message to the chat acknowledging receipt of their message
      await bot.sendMessage(chatId, 'хай');
      await bot.sendMessage(admin, `Юзер ${msg.from.username} написав тобі месагу: ${msg.text}`);
      if (msg.text === 'db') {
        let newProduct = {
          id: '1',
          trackNumber: '456786567',
          name: ['apple', 'macbook'],
          totalAmount: 34567876,
        };
        const result = await new Product(newProduct).save();
        if (result) {
          console.log('data saved');
        } else {
          console.log('error save');
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
};

//BOT RESPONSE:
// {
//   message_id: ID_СООБЩЕНИЯ,
//   from: {
//     id: ID_ПОЛЬЗОВАТЕЛЯ,
//     is_bot: false,
//     first_name: ИМЯ_ПОЛЬЗОВАТЕЛЯ,
//     username: НИК_ПОЛЬЗОВАТЕЛЯ,
//     language_code: 'ru'
//   },
//   chat: {
//     id: ID_ЧАТА,
//     first_name: ИМЯ_ПОЛЬЗОВАТЕЛЯ,
//     username: НИК_ПОЛЬЗОВАТЕЛЯ,
//     type: 'private'
//   },
//   date: 1686255759,
//   text: ТЕКСТ_СООБЩЕНИЯ,
