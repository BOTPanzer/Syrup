const Discord = require('discord.js');
let xp = require("./xp.json");

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first();
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let curmul = xp[message.author.id].xpmul;
  let nxtLvl = (curlvl * 300) + ((curlvl - (curlvl / 2)) * curlvl) * 50;

  if(!member) {
    if(curlvl >= 100) rango = "👑"
    if(curlvl >= 85) rango = "💎"
    if(curlvl >= 70) rango = "💍"
    if(curlvl >= 55) rango = "🏆"
    if(curlvl >= 40) rango = "🥇"
    if(curlvl >= 30) rango = "🥈"
    if(curlvl >= 20) rango = "🥉"
    if(curlvl >= 10) rango = "🏅"
    if(curlvl >= 5) rango = "🎖"
    if(curlvl < 5) rango = "🎓"
    let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#f0d800')
    message.channel.send(perfil);

  } else {

  if(!xp[member.id]){
    xp[member.id] = {
      xp: 0,
      level: 0,
      xpmul: 1
    };
  }
  
  let curmxp = xp[member.id].xp;
  let curmlvl = xp[member.id].level;
  let nxtmLvl = (curmlvl * 300) + ((curmlvl - (curmlvl / 4)) * curmlvl) * 10;

  if(curmlvl >= 100) rango = "👑"
  if(curmlvl >= 85) rango = "💎"
  if(curmlvl >= 70) rango = "💍"
  if(curmlvl >= 55) rango = "🏆"
  if(curmlvl >= 40) rango = "🥇"
  if(curmlvl >= 30) rango = "🥈"
  if(curmlvl >= 20) rango = "🥉"
  if(curmlvl >= 10) rango = "🏅"
  if(curmlvl >= 5) rango = "🎖"
  if(curmlvl < 5) rango = "🎓"
  let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#f0d800')
  message.channel.send(perfil);
  }
}