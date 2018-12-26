var money = require('discord-money');

module.exports.run = async (bot, message, args) => {

randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
const nomoney = ("No tienes suficiente dinero para hacer eso.");

money.fetchBal(message.author.id).then((i) => {
  if (i.money > 6) {
  if(randomNumber==2){
    message.reply("¡Moriste! 💀");
    money.updateBal(message.author.id, -5 /* Value */).then((i) => {
    message.channel.send(`**Has perdido 6$!**\n**Banco :** ${i.money}$`);
  })
  } else{
    message.reply("¡Sobreviviste! 😃");
    money.updateBal(message.author.id, 1 /* Value */).then((i) => {
    message.channel.send(`**Has ganado 1$!**\n**Banco :** ${i.money}$`);
  })
  }
  } else {
    message.channel.send(nomoney);
  }
})
}