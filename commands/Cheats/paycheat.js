const Discord = require("discord.js");
var money = require('discord-money');

exports.run = (client, message, args) => {
    
if(!message.member.id === "318384645274337280") return;

const dinero = args.join(" ");
money.updateBal(message.author.id, (dinero) /* Value */).then((i) => {
let botembed = new Discord.RichEmbed()
  .setTitle(`¡Se ha realizado un cambio de **${dinero}$**!`)
  .setDescription(`Banco : **${i.money}$**`)
  .setColor('RANDOM')
message.channel.send(botembed);
})
}