const { Status } = require('../Components/Status');

const convertStatusMsg = (status) => {
  switch (status) {
    case Status.New:
      return '🔵 Новая посылка';
    case Status.OnReview:
      return '🟢 Посылка в работе';
    case Status.ToEdit:
      return '🟡 Посылка на доработке';
    case Status.Reject:
      return '🔴 Отказ';
    case Status.Archive:
      return '🗂 Архив';
    default:
      return '';
  }
};

module.exports = { convertStatusMsg };
