const { mainButtons } = require('../../Components/Buttons');
const { Status } = require('../../Components/Status');
const {
  saveProduct,
  updateProductTotalAmount,
  updateProductInfo,
  userProductsByUserTGId,
} = require('../../Storages/ProductStorage');
const { dateForErrorLog } = require('../../utils/formatDate');
const { sendMessageToUser } = require('../../utils/sendMessageToUser');

function containsOnlyNumbers(inputString) {
  return /^\d+(\.\d+)?$/.test(inputString) || /^\.\d+$/.test(inputString);
}
let states = {};
module.exports = (app, bot, logger) => {
  try {
    bot.on('text', async (msg) => {
      const { chat } = msg;

      const exitButton = 'Вийти з додавання';
      if (msg.text === exitButton) {
        delete states[msg.from.id];
        delete states[msg.from.id + `id`];
      }
      if (msg.text === '🆕 Добавить посылку' || msg.text === '🆕 Добавить еще одну посылку') {
        bot
          .sendMessage(
            msg.from.id,
            `
Введите трек-номер вашей посылки:

ℹ️ NP000000000000000NPG / CV00000000US / MYCV00000000DE (пример трек номеров NP Shopping, Meest)
            
        
Инструкция по работе с ботом
https://teletype.in/@usetname9472/ssbot
        

          `,
            {
              reply_to_message_id: msg.message_id,
              reply_markup: {
                force_reply: true,
                selective: true,
              },
            },
          )
          .then(() => {
            console.log(msg.from.id);
            states[msg.from.id] = 1;
          });
      }

      if (states[msg.from.id] == 1) {
        const result = await saveProduct({
          trackNumber: msg.text,
          userTGId: msg.from.id,
          userTGNick: msg.from.username,
        });

        if (result) {
          bot
            .sendMessage(
              msg.from.id,
              `
Введите общую стоимость посылки в $ (долларах США):

ℹ️ Стоимость без учета налогов и доставки
            
Если у вас в инвойсе цены в евро, фунтах и тд - переведите общую стоимость в $, используя конвертер 
https://minfin.com.ua/currency/converter/?from=eur&to=usd&val1=&val2=

Введите только число, без букв и других символов
            `,
              {
                reply_to_message_id: msg.message_id,
                reply_markup: {
                  force_reply: true,
                  selective: true,
                },
              },
            )
            .then(() => {
              states[msg.from.id] = 2;
              states[msg.from.id + `id`] = result._id.toString();
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error save to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }
      if (states[msg.from.id] == 2) {
        if (!containsOnlyNumbers(msg.text)) {
          bot.sendMessage(
            msg.from.id,
            `
Введите общую стоимость посылки в $ (долларах США):

ℹ️ Стоимость без учета налогов и доставки
                      
Если у вас в инвойсе цены в евро, фунтах и тд - переведите общую стоимость в $, используя конвертер 
https://minfin.com.ua/currency/converter/?from=eur&to=usd&val1=&val2=
          
Введите только число, без букв и других символов`,
          );
          return;
        }
        const result = await updateProductTotalAmount({
          _id: states[msg.from.id + `id`],
          totalAmount: msg.text,
        });
        if (result) {
          bot
            .sendMessage(
              msg.from.id,
              `
Введите информацию о фактическом содержимом посылки и получателе:
ℹ️ Форма добавления информации в правилах 

Правила Сервиса
https://teletype.in/@usetname9472/rules`,
              {
                reply_to_message_id: msg.message_id,
                reply_markup: {
                  force_reply: true,
                  selective: true,
                },
              },
            )
            .then(() => {
              states[msg.from.id] = 3;
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error update amount to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }
      if (states[msg.from.id] == 3) {
        const result = await updateProductInfo({
          _id: states[msg.from.id + `id`],
          info: msg.text,
        });
        if (result) {
          bot
            .sendMessage(
              msg.from.id,
              `
☑️ Посылка добавлена! 
После проверки саппортом, вам вышлют сумму к оплате и реквизиты!
            `,
              {
                reply_to_message_id: msg.message_id,
                reply_markup: {
                  keyboard: [['🆕 Добавить еще одну посылку', '↩️ Вернуться назад']],
                  resize_keyboard: true,
                },
              },
            )
            .then(() => {
              delete states[msg.from.id];
              delete states[msg.from.id + `id`];
            });
        } else {
          logger.error(
            `${dateForErrorLog()} -- Error update info to DB user id: ${msg.from.id} username: ${
              msg.from.username
            }`,
          );
          bot.sendMessage(msg.from.id, 'Помилка сейву до ДБ, спробуйте пізніше: ');
          delete states[msg.from.id];
          delete states[msg.from.id + `id`];
        }
      }

      if (msg.text === '↩️ Вернуться назад') {
        await sendMessageToUser({
          bot,
          userId: msg.chat.id,
          message: `
❗️Чтобы добавить посылку выполняйте инструкции
https://teletype.in/@usetname9472/rules123
          
📩 По любим вопросам пишите @staffship
          `,
          options: {
            reply_markup: {
              keyboard: mainButtons,
              resize_keyboard: true,
            },
          },
        });
      }

      if (msg.text === '📦 Мои посылки') {
        const userTGId = msg.from.id;
        if (!userTGId) return;
        const products = await userProductsByUserTGId({ userTGId });
        if (!products) {
          await bot.sendMessage(userTGId, 'Пусто');
          return;
        }
        const formattedProducts = products
          .filter((item) => item.status !== Status.Archive)
          .map((product) => {
            return `Track Number: ${product.trackNumber}\nStatus: ${product.status}\n`;
          });
        const messageText = formattedProducts.join('\n');
        await bot.sendMessage(userTGId, messageText);
      }

      if (msg.text === '💰 Тарифы') {
        await bot.sendMessage(
          chat.id,
          `
Актуальный список пересылов и почтовых служб, по которым можем помочь:
🟢 Meest, NP Shopping, DHL Express, EMS, Укрпочта
          
◾️ Meest
❗️ США, Европа, Китай - любые страны-отправители
Тарифы Мист:
          
15 % от фактической стоимости посылки
14 % - если объем ваших посылок >= 50к $
20 % - застрявшие посылки на таможне , по ним гарантии нет, так как есть нюансы , каждая такая посылка рассматривается индивидуально, если не получается, то делаем возврат.
◾️ NP Shopping, DHL Express, EMS, Укрпочта
❗️ NP Shopping - берем в работу только посылки из США, так как посылки с Европы попадают во Львов, там мы помочь не сможем, по этому рекомендуем отравлять посылки с Европы через Meest
          
10 % от фактической стоимости посылки
9 % - если обьем ваших посылок >= 50к $
20 % - застрявшие посылки на таможне , по ним гарантии нет, так как есть нюансы , каждая такая посылка рассматривается индивидуально, если не получается, то делаем возврат.
❗️ Минимальная стоимость посылок, которые берем в работу - 200$
          
⛔️ Складчины, перепродажа услуг - ЗАПРЕЩЕНЫ
          
📩 По любим вопросам пишите @staffship`,
          {
            parse_mode: 'HTML',
          },
        );
      }
      if (msg.text === '📝 Правила') {
        await bot.sendMessage(
          chat.id,
          `
Это основные правили работы нашего сервиса!
Здесь описаны принципы работы, тарифы, правила декларирования посылок в кабинетах почтовых служб, по этому перед тем как задавать вопросы - внимательно их прочтите!

❗️  Напоминаем, что пропускать посылки становиться все сложнее, по этому нужно четко и вовремя выполнять  инструкции, а именно:
- декларировать строго как указано у нас в правилах, особенно это касается названия и стоимости!
заранее бросать информацию о посылке - как только присвоили трек-номер отдавайте в работу!

◾️  Правила Сервиса 
https://teletype.in/@usetname9472/rules123

◾️  Правила добавления посылок через бот
https://teletype.in/@usetname9472/rules123 
 
📩 По любим вопросам пишите @staffship`,
          {
            parse_mode: 'HTML',
          },
        );
      }
      if (msg.text === '📩 Написать нам') {
        await bot.sendMessage(
          chat.id,
          `📩 По всем интересующим вопросам пишите саппорту
@staffship`,
          {
            parse_mode: 'HTML',
          },
        );
      }
      if (msg.text === '📰 Канал') {
        await bot.sendMessage(
          chat.id,
          `📰 Посдписывайтесь на наш канал, чтобы быть всегда в курсе изменений в работе сервиса
 @staffship`,
          {
            parse_mode: 'HTML',
          },
        );
      }
      if (msg.text == '❌ Закрыть меню') {
        await bot.sendMessage(chat.id, 'Меню закрыто', {
          reply_markup: {
            remove_keyboard: true,
          },
        });
      }
      if (msg.text == 'На главную') {
        await bot.sendMessage(chat.id, 'На главную', {
          reply_markup: {
            keyboard: mainButtons,
            resize_keyboard: true,
          },
        });
      }
    });
  } catch (e) {
    logger.error(`${dateForErrorLog()} -- Button controller error`);
    console.log('Button controller error');
  }
};
