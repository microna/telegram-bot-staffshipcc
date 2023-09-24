const { commands, adminCommands } = require('../../utils/commands');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot) => {
  try {
    const adminId = process.env.ADMIN_ID;

    bot.onText(/\/start/, async (msg) => {
      await sendMessageToUser({
        bot,
        userId: msg.chat.id,
        message: `Вы запустили бота! \n Нажмите на кнопку menu что бы начать работу с ботом \n TODO text...`,
        options: {},
      });

      const isAdmin = Boolean(+adminId === +msg.from.id);
      bot.setMyCommands(isAdmin ? [...adminCommands, ...commands] : commands);
    });
  } catch (e) {
    console.log('Bot controller error');
  }
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
