require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const PORT = process.env.PORT || 4444;

const token = process.env.TELEGRAM_BOT_TOKEN;

app.use(cors());
app.use(express.json());
const bot = new TelegramBot(token, { polling: true });

require('./Controllers/BotController')(app, bot);

console.log('1234')
app.get('/', (req, res) => {
  console.log(req.body);
  res.json({
    hello: 'hi!',
  });
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({
    hello: 'hi!',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});


