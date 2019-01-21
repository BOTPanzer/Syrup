const Discord = require("discord.js");
var money = require('discord-money');
let banco = require("../bancoserver.json");

exports.run = (client, message, args) => {

  if(!args[0]){
    money.fetchBal(message.author.id).then((i) => {
      let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author}**, tienes **${i.money}$** en el **banco**.`)
        .setColor('RANDOM')
      message.channel.send(embed);
     })
  } else if(args[0] === "server") {
    let embed = new Discord.RichEmbed()
      .setDescription(`El banco del server tiene **${banco[message.guild.id].dinero}$**.`)
      .setColor('RANDOM')
    message.channel.send(embed);
  } else {
    let member = message.mentions.members.first();
    money.fetchBal(member.id).then((i) => {
      let botembed = new Discord.RichEmbed()
      .setDescription(`Banco de ${member}: **${i.money}$**`)
      .setColor('RANDOM')
    message.channel.send(botembed);
  })
  }
}