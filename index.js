const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config();
const Token = process.env.TOKEN
const bot = new TelegramBot(Token, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.first_name, "Hi and Welcome!! press /help to find out how to use me");
    
});

console.log('bot is running')
