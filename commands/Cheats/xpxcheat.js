const Discord = require("discord.js");
let xp = require("../Xp/xp.json");
var fs = require('fs');

exports.run = (client, message, args) => {

if(!message.member.id === "318384645274337280") return;


const cheat = args.join(" ");
if(!cheat) return
const num = cheat * 1
xp[message.author.id].xpmul = num

let botembed = new Discord.RichEmbed()
  .setTitle(`Ahora tu multiplicador es **x${xp[message.author.id].xpmul}**`)
  .setColor('RANDOM')
message.channel.send(botembed);

fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
  });
}