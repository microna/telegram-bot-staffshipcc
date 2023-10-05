require('dotenv').config();
const cors = require('cors');
const express = require('express');
const winston = require('winston');
const fs = require('fs');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const { checkAuth } = require('./src/utils/checkAuth');
const { addAdminUser, login } = require('./src/Storages/AdminStorage');
const { getAllProducts, updateProduct, getProductById } = require('./src/Storages/ProductStorage');
const { sendMessageToUser } = require('./src/utils/sendMessageToUser');
const { dateForErrorLog } = require('./src/utils/formatDate');

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    logger.info(`${dateForErrorLog()} -- Connected to MongoDB 🔥`);
    console.log('Connected to MongoDB 🔥');
  })
  .catch((err) => {
    logger.error(`${dateForErrorLog()} -- Erorr connection to MongoDB`);
    console.log('db connection error: ', err);
  });

const PORT = process.env.PORT || 4444;

const token = process.env.TELEGRAM_BOT_TOKEN;

const adminId = process.env.ADMIN_ID;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'combined.log' })],
});

app.use(
  cors({
    origin: [process.env.ENVIRONMENT_FRONTEND_DOMAIN, 'http://localhost:3000'],
  }),
);
app.use(express.json());
app.use(express.static(__dirname + '/public'));
const bot = new TelegramBot(token, { polling: true, autoStart: true });

require('./src/Controllers/Bot/BotController')(app, bot, logger);
require('./src/Controllers/Bot/MenuController')(app, bot, logger);
require('./src/Controllers/Bot/AdminController')(app, bot, logger);
require('./src/Controllers/Bot/ButtonController')(app, bot, logger);

app.get('/products', checkAuth, async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

app.get('/adduser', async (req, res) => {
  const products = await addAdminUser();
  res.json(products);
});

app.patch('/changeProductStatus', checkAuth, async (req, res) => {
  try {
    const { id, status, message } = req.body;
    const result = await updateProduct({ id, status, message });
    const product = await getProductById({ id });
    const textAnswer = `Track number: ${product.trackNumber} \n totalAmount: ${product.totalAmount} \n Info: ${product.info} \n status: ${product.status} \nadmin comment: \n${product.comments}`;
    if (result) {
      await sendMessageToUser({
        bot,
        userId: +product.userTGId,
        message: textAnswer,
        options: {},
      });
      await sendMessageToUser({
        bot,
        userId: +adminId,
        message: textAnswer,
        options: {},
      });
      res.json({ isStatusEdited: true });
    }
  } catch (err) {
    res.status(500).json({
      message: 'failed change status',
      err,
    });
  }
});

app.post('/login', login);

app.get('/logs', checkAuth, function (req, res) {
  try {
    const logData = fs.readFileSync('./combined.log', 'utf8');
    const logs = logData.split('\n').filter((line) => line.trim() !== '');
    const parsedLogs = logs.map((logEntry) => JSON.parse(logEntry));
    res.json(parsedLogs);
  } catch (err) {
    res.status(500).json({
      message: 'failed get logs',
      err,
    });
  }
});
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

const host = '0.0.0.0';

app.listen(PORT, host, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
