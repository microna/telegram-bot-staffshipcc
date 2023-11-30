const { commands, adminCommands } = require('../../utils/commands');
const { dateForErrorLog } = require('../../utils/formatDate');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

module.exports = (app, bot, logger) => {
  try {
    const adminId = process.env.ADMIN_ID;

    bot.onText(/\/start/, async (msg) => {
      await sendMessageToUser({
        bot,
        userId: msg.chat.id,
        message: `
Приветствуем, это бот команды STAFFSHIP для удобной работы с посылками!\n
Команда STAFFSHIP уже пять лет успешно оказывает услуги по упрощенному прохождению украинской таможни за это время мы получили множество положительных отзывов, сотни довольных клиентов, так как сэкономили им уйму времени и денег!
Так же есть свой скуп-сервис с хорошими процентами!
        
Правила Сервиса
https://teletype.in/@usetname9472/rules
        
Инструкция по работе с ботом
https://teletype.in/@usetname9472/ssbot
        
📩 Саппорт @staffship
        
/menu - меню бота
        `,
        options: {},
      });

      const isAdmin = Boolean(+adminId === +msg.from.id);
      bot.setMyCommands(isAdmin ? [...adminCommands, ...commands] : commands);
    });
  } catch (e) {
    logger.error(`${dateForErrorLog()} -- Initial error start bot`);
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
