const Discord = require("discord.js");
let xp = require("../Xp/xp.json");
var fs = require('fs');
var money = require('discord-money');

exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");

const cheat = args.join(" ");
const lvlnum = cheat * 1
const xpnum = cheat * 300

let curxp = xp[message.author.id].xp;
xp[message.author.id].xp = curxp + xpnum;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 300;

if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + lvlnum;
  let lvlup = new Discord.RichEmbed()
  .setTitle("¡Has subido de nivel!")
  .setDescription(`Recompensa por subir al nivel **${curlvl + lvlnum}** : **${lvlnum * 10}$**`)
  .setColor('RANDOM')

  message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  money.updateBal(message.author.id, lvlnum * 10)

fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});
}
}