const Discord = require("discord.js");
var fs = require('fs');
var money = require('discord-money');
let xp = require("../Xp/xp.json");

exports.run = (client, message, args) => {

if(!message.member.id === "318384645274337280") return message.reply("No dev, sorry :(");

const cheat = args.join(" ");
const lvlnum = cheat * 1
let curlvl = xp[message.author.id].level;
let chtlvl = curlvl + lvlnum
xp[message.author.id].level = chtlvl;

let lvlup = new Discord.RichEmbed()
  .setTitle(`¡**${message.author.tag}** ha subido de nivel!`)
  .setDescription(`Recompensa por subir al nivel **${chtlvl}** : **${lvlnum * 10}**`)
  .setColor('RANDOM')
message.channel.send(lvlup).then(msg => {msg.delete(7000)});
money.updateBal(message.author.id, lvlnum * 10)

fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});
}
