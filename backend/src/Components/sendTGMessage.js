const sendTGMessage = async (bot, userTGid, message) => {
  try {
    await bot.sendMessage(+userTGid, message, {});
    return true;
  } catch (e) {
    throw new Error('failed to send message');
  }
};

module.exports = { sendTGMessage };
