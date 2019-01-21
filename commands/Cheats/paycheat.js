const Discord = require("discord.js");
var money = require('discord-money');

exports.run = (client, message, args) => {
    
if(!message.member.id === "318384645274337280") 
  return message.channel.send("Que haces estupido");

const dinero = args[0]
if(!dinero)
  return message.reply("El dinero es dinero, aprende algo dinero");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Por favor, menciona un miembro valido del servidor");

if(!args[1]) {
  money.updateBal(message.author.id, (dinero))
  money.fetchBal(message.author.id).then((i) => {
    let botembed = new Discord.RichEmbed()
    .setTitle(`¡Se ha realizado un cambio de **${dinero}$**!`)
    .setDescription(`Banco : **${i.money + (dinero * 1)}$**`)
    .setColor('RANDOM')
  message.channel.send(botembed);
  })
} else {
  money.updateBal(member.id, (dinero))
  money.fetchBal(member.id).then((i) => {
    let botembed = new Discord.RichEmbed()
    .setTitle(`¡Se ha realizado un cambio de **${dinero}$**!`)
    .setDescription(`Banco de ${member}: **${i.money + (dinero * 1)}$**`)
    .setColor('RANDOM')
  message.channel.send(botembed);
})
}
}