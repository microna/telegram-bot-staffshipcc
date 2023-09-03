require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

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
const bot = new TelegramBot(token, { polling: true, autoStart: true });

require('./src/Controllers/BotController')(app, bot);

app.get('/', (req, res) => {
  res.json({
    hello: 'Dev!',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
