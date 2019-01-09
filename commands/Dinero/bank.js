const Discord = require("discord.js");
var money = require('discord-money');

exports.run = (client, message, args) => {
  money.fetchBal(message.author.id).then((i) => {
    let embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, tienes **${i.money}$** en el **banco**.`)
      .setColor('RANDOM')
  message.channel.send(embed);
  })
}