const { saveProduct } = require('../Storages/ProductStorage');
const { saveUser } = require('../Storages/UserStorage');

module.exports = (app, bot) => {
  const adminId = process.env.ADMIN_ID;
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
    const chatId = msg.chat.id;
    console.log(msg.from.id, msg.from.username);
    // send a message to the chat acknowledging receipt of their message
    await bot.sendMessage(chatId, 'хай');
    await bot.sendMessage(adminId, `Юзер ${msg.from.username} написав тобі месагу: ${msg.text}`);
    if (msg.text === 'save product') {
      const { from } = msg;
      const result = await saveProduct({
        clientId: from.id,
        trackNumber: 'NP000000000000000NPG',
        name: {
          productName: 'Apple iPad 6th Gen 32G',
          amount: 259,
          quantity: 7,
          link: 'https://www.ebay.com/itm/Apple-iPad-6th-Gen-32GB-Space-Gray-Wi-Fi-MR7F2LL-A/123135018732?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2057872.m2749.l2649',
        },
        totalAmount: 2062,
      });

      if (result) {
        await bot.sendMessage(adminId, `Продукт успішно доданий до БД!`);
      } else {
        await bot.sendMessage(adminId, `Помилка сейву до БД!`);
      }
    }
    if (msg.text === 'save user') {
      const { from } = msg;
      const result = await saveUser({
        userId: from.id,
        isBot: from.is_bot,
        firstName: from.first_name,
        lastName: from.last_name,
        userName: from.username,
        languageCode: from.language_code,
      });

      if (result) {
        await bot.sendMessage(adminId, `User успішно доданий до БД!`);
      } else {
        await bot.sendMessage(adminId, `Помилка сейву до БД!`);
      }
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
