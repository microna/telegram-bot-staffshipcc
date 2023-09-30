require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const PORT = process.env.PORT || 4444;

const token = process.env.TELEGRAM_BOT_TOKEN;

app.use(cors());
app.use(express.json());
const bot = new TelegramBot(token, { polling: true, autoStart: true });

require('./Controllers/BotController')(app, bot);

app.get('/', (req, res) => {
  console.log(req.body);
  res.json({
    hello: 'Prod!',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
