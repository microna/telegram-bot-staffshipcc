const sendMessageToUser = async ({ bot, userId, message }) => {
  try {
    await bot.sendMessage(userId, `${message} `, {
      reply_markup: {
        force_reply: true,
      },
    });
    return true;
  } catch (e) {
    console.log('chat with user not found');
  }
};

module.exports = { sendMessageToUser };
