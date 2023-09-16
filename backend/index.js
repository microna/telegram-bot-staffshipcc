require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const { getAllProducts } = require('./src/Storages/ProductGeneral');
const { checkAuth } = require('./src/utils/checkAuth');
const { addAdminUser, login } = require('./src/Storages/AdminStorage');

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB 🔥');
  })
  .catch((err) => console.log('db connection error: ', err));

const PORT = process.env.PORT || 4444;

const token = process.env.TELEGRAM_BOT_TOKEN;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
const bot = new TelegramBot(token, { polling: true, autoStart: true });

require('./src/Controllers/Bot/BotController')(app, bot);
require('./src/Controllers/Bot/MenuController')(app, bot);
require('./src/Controllers/Bot/UserController')(app, bot);
require('./src/Controllers/Bot/AdminController')(app, bot);
require('./src/Controllers/Bot/ButtonController')(app, bot);

app.get('/products', checkAuth, async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

app.get('/adduser', async (req, res) => {
  const products = await addAdminUser();
  res.json(products);
});

app.post('/login', login);

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
