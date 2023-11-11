const mainButtons = [
  ['🆕 Добавить посылку', '📦 Мои посылки'],
  ['💰 Тарифы', '📝 Правила'],
  ['📩 Написать нам', '📰 Канал'],
  ['❌ Закрыть меню'],
];

const adminButtons = [
  ['✅Новие закази', '🛠Заказы в работе'],
  ['📌Заказы на доработку', '❌Отмененные заказы'],
  ['🧙🏼‍♂️Архив'],
];

const productButtons = (callbackData, status) => {
  return [
    [
      {
        text: 'В работе',
        callback_data: `${callbackData}:${status.OnReview}`,
      },
      {
        text: 'На доработку',
        callback_data: `${callbackData}:${status.ToEdit}`,
      },
      {
        text: 'Отмена',
        callback_data: `${callbackData}:${status.Reject}`,
      },
      {
        text: 'Архив',
        callback_data: `${callbackData}:${status.Archive}`,
      },
    ],
  ];
};

module.exports = { mainButtons, adminButtons, productButtons };
