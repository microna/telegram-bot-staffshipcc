module.exports = (app, bot) => {
  bot.on('text', async (msg) => {
    if (msg.text == '/user') {
      await bot.sendMessage(
        msg.chat.id,
        `Розділ допомоги HTML\n\n<b>Жирный Текст</b>\n<i>Текст Курсивом</i>\n<code>Текст с Копированием</code>\n<s>Перечеркнутый текст</s>\n<u>Подчеркнутый текст</u>\n<pre language='c++'>код на c++</pre>\n<a href='t.me'>Гиперссылка</a>`,
        {
          parse_mode: 'HTML',
        },
      );
    }
  });
};
