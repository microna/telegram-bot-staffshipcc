const { Status } = require('../../Components/Status');
const { saveProduct, updateProductStatus } = require('../../Storages/ProductStorage');
const { saveUser } = require('../../Storages/UserStorage');
const { commands, adminCommands } = require('../../utils/commands');

module.exports = (app, bot) => {
  const adminId = process.env.ADMIN_ID;
  const isAdmin = false; //adminId === msg.from.id;
  // Matches "/echo [whatever]"
  bot.setMyCommands(isAdmin ? adminCommands : commands);

  bot.onText(/\/start/, async (msg) => {
    try {
      await bot.sendMessage(
        msg.chat.id,
        `Вы запустили бота! \n Нажмите на кнопку menu что бы начать работу с ботом \n TODO text...`,
      );
    } catch (error) {
      console.log('error');
    }
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', async (msg) => {
    const { from } = msg;

    if (msg.text === 'save product') {
      const result = await saveProduct({
        clientId: from.id,
        clientUserName: from.username,
        trackNumber: 'NP000000000000000NPG',
        name: {
          productName: 'Apple iPad 6th Gen 32G',
          amount: 259,
          quantity: 7,
          link: 'https://www.ebay.com/itm/Apple-iPad-6th-Gen-32GB-Space-Gray-Wi-Fi-MR7F2LL-A/123135018732?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2057872.m2749.l2649',
        },
        totalAmount: 2062,
        status: Status.OnReview,
      });

      if (result) {
        await bot.sendMessage(adminId, `Продукт успішно доданий до БД!`);
      } else {
        await bot.sendMessage(adminId, `Помилка сейву до БД!`);
      }
    }
    if (msg.text === 'save user') {
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
    if (msg.text === 'update status') {
      const result = await updateProductStatus({
        clientId: from.id,
        trackNumber: 'NP000000000000000NPG',
        status: Status.ToEdit,
      });
      if (result) {
        await bot.sendMessage(adminId, `Status посилки успішно змінений у БД!`);
      } else {
        await bot.sendMessage(adminId, `Помилка зміни статусу у БД!`);
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
