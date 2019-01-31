const Discord = require("discord.js");
var fs = require('fs');
let banco = require("../bancoserver.json");

exports.run = (client, message, args) => {
    
if(!message.member.id === "318384645274337280") return;
    

if(!args[0]) {
  message.channel.send("Dinero men.");
} else {
  let din = args[0] * 1
  banco[message.guild.id].dinero = banco[message.guild.id].dinero + din
  fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
  });
  let botembed = new Discord.RichEmbed()
    .setTitle(`¡Se ha realizado un cambio de **${din}$** el el banco del server!`)
    .setDescription(`Banco del server : **${banco[message.guild.id].dinero}$**`)
    .setColor('RANDOM')
  message.channel.send(botembed);
}
}