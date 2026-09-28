const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
let bot = null;
if(BOT_TOKEN){
 bot = new TelegramBot(BOT_TOKEN);
 bot.onText(/\/start/, (msg)=>{
  bot.sendMessage(msg.chat.id, "Salam Ahsan Bhai! Ahsan-13_3in1 Online Hai");
 });
 bot.onText(/\/ping/, (msg)=>{
  bot.sendMessage(msg.chat.id, "✅ LIVE HAI - "+new Date().toLocaleString());
 });
}
app.post(`/bot${BOT_TOKEN}`, (req,res)=>{
 if(bot) bot.processUpdate(req.body);
 res.sendStatus(200);
});
app.get('/', (req,res)=>{ res.send('Ahsan-13_3in1 Running'); });
app.listen(PORT, ()=> console.log("Server ON"));
