const { sendMessageToAdmin } = require('./sendMessageToAdmin');
const sendMessageToUser = async ({ bot, userId, userTGNick = '', message, options }) => {
  try {
    await bot.sendMessage(userId, `${message} `, options);
    return true;
  } catch (e) {
    sendMessageToAdmin({ bot, userTGNick });
  }
};

module.exports = { sendMessageToUser };
