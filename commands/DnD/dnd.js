let player = require("./players.json");
const Discord = require("discord.js");
var fs = require('fs');

module.exports.run = async (bot, message, args) => {

let member = message.mentions.members.first();
if(!member) member = message.author

if(!player[member.id]){
  player[member.id] = {
    nombre: "(nombre personaje)",
    full: "(vida full)",
    temp: "(vida temporal)",
    armor: "(armadura)",
    comp: "(bonificador competencia)",
    arma1: "(arma 1)",
    arma2: "(arma 2)",
    arma3: "(arma 3)",
  };
}

fs.writeFile("./DnD/players.json", JSON.stringify(player), (err) => {if(err) console.log(err)});

if(!args[0]) {
message.channel.send("Selecciona algo")
} else if(args[0] === "profile") {
  let botembed = new Discord.RichEmbed()
    .setTitle(`Ficha del personaje de ${member.tag}`)
    .setDescription(`Alias **${player[member.id].nombre}**`)
    .addField(`❤Vida:`, `❤Full: ${player[member.id].full} | ❣Temporal: ${player[member.id].temp}`)
    .addField(`Varios:`, `🛡Armadura: ${player[member.id].armor} | Competencia: ${player[member.id].comp} | `)
    .setColor('RANDOM');
  message.channel.send(botembed);
} else if(args[0] === "change") {

}
}