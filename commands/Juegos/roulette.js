const Discord = require("discord.js");
var money = require('discord-money');

module.exports.run = async (bot, message, args) => {

  randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
  const nomoney = ("No tienes suficiente dinero para hacer eso.");

  money.fetchBal(message.author.id).then((i) => {
    if (i.money > 4) {
      if(randomNumber === 4){
        let embed = new Discord.RichEmbed()
          .setTitle('¡Has muerto! 💀')
          .setDescription(`**Has perdido 4$!**\n**Banco :** ${i.money}$`)
          .setColor('#938FC3');
        message.channel.send(embed);
        money.updateBal(message.author.id, -4)
      } else{
        let embed = new Discord.RichEmbed()
          .setTitle('¡Has sobrevivido! 😃')
          .setDescription(`**Has ganado 1$!**\n**Banco :** ${i.money}$`)
          .setColor('#CFA804');
        message.channel.send(embed);
        money.updateBal(message.author.id, 1)
      }
    } else {
      message.channel.send(nomoney);
    }
  })
}