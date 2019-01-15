const Discord = require("discord.js");
var money = require('discord-money');
var fs = require('fs');
let banco = require("../bancoserver.json");

exports.run = (client, message, args) => {
    
if(!message.member.id === "318384645274337280") return;

const dinero = args[0]
const server = args[1]


if(!server) {
  money.updateBal(message.author.id, (dinero))
  let botembed = new Discord.RichEmbed()
    .setTitle(`¡Se ha realizado un cambio de **${dinero}$**!`)
    .setDescription(`Banco : **${i.money}$**`)
    .setColor('RANDOM')
  message.channel.send(botembed);
} else {
  let din = dinero * 1
  banco[message.guild.id].dinero = banco[message.guild.id].dinero + din
  fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
  });
  let botembed = new Discord.RichEmbed()
    .setTitle(`¡Se ha realizado un cambio de **${dinero}$** el el banco del server!`)
    .setDescription(`Banco del server : **${banco[message.guild.id].dinero}$**`)
    .setColor('RANDOM')
  message.channel.send(botembed);
}
}