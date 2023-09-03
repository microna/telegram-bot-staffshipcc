const { saveProduct, updateProductStatus } = require('../Storages/ProductStorage');
const { saveUser } = require('../Storages/UserStorage');
const { commands } = require('../utils/commands');

module.exports = (app, bot) => {
  const Status = {
    OnReview: 'On review',
    Finalize: 'Finalize',
    Reject: 'Reject',
  };
  const adminId = process.env.ADMIN_ID;
  // Matches "/echo [whatever]"
  bot.setMyCommands(commands);
  bot.onText(/\/start/, async (msg) => {
    try {
      await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

      if (msg.text === '/start') {
        await bot.sendMessage(
          msg.chat.id,
          `Вітаю! Трохи варіанті верстки тексту: HTML приклад \n\n<b>Потрібен текст для вітання сюди </b>\n<i>TODO</i>\n<code>Можна скопіювати</code>\n<s>Варіант тексту</s>\n<u>Ще варіант</u>\n<pre language='c++'>Додатковий код</pre>\n<a href='t.me'>Посилання якщо потрібно</a>`,
          {
            parse_mode: 'HTML',
          },
        );
        // await bot.sendMessage(msg.chat.id, `${match} match `);
      }
    } catch (error) {
      console.log(error);
    }
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const { from } = msg;
    console.log(msg.from.id, msg.from.username);
    // send a message to the chat acknowledging receipt of their message
    await bot.sendMessage(chatId, 'хай');
    await bot.sendMessage(adminId, `Юзер ${msg.from.username} написав тобі адміну месагу: ${msg.text}`);
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
        status: Status.Finalize,
      });
      if (result) {
        await bot.sendMessage(adminId, `Status посилки успішно змінений у БД!`);
      } else {
        await bot.sendMessage(adminId, `Помилка зміни статусу у БД!`);
      }
    }

    if (msg.text == '/menu') {
      await bot.sendMessage(msg.chat.id, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ['⭐️ Тарифы', '⭐️ Правила'],
            ['⭐️ Написать нам', '⭐️ Канал'],
          ],
          resize_keyboard: true,
        },
      });
    }

    bot.on('text', async (msg) => {
      try {
        if (msg.text == '/help') {
          await bot.sendMessage(
            msg.chat.id,
            `Розділ допомоги HTML\n\n<b>Жирный Текст</b>\n<i>Текст Курсивом</i>\n<code>Текст с Копированием</code>\n<s>Перечеркнутый текст</s>\n<u>Подчеркнутый текст</u>\n<pre language='c++'>код на c++</pre>\n<a href='t.me'>Гиперссылка</a>`,
            {
              parse_mode: 'HTML',
            },
          );
        } else {
          await bot.sendMessage(msg.chat.id, msg.text);
        }
      } catch (error) {
        console.log(error);
      }
    });
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
