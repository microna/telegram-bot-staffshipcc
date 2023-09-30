const { format } = require('date-fns');

const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

const dateForErrorLog = () => {
  return format(new Date(), 'dd-MM-yyyy HH:mm:ss');
};

module.exports = { formatDate, dateForErrorLog };
