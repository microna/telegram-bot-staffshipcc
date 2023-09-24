const sendMessageToAdmin = async ({ bot, userTGNick }) => {
  try {
    const adminId = process.env.ADMIN_ID;
    const message = `Пользователь ${userTGNick} удалил чат з ботом, сообщеніе ему не било доставлено. Или другая проблема`;
    await bot.sendMessage(adminId, `${message}`, {});
    return true;
  } catch (e) {
    console.log('error send message to admin');
  }
};

module.exports = { sendMessageToAdmin };
