const Discord = require('discord.js');
let xp = require("./xp.json");

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.members.first();
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let curmul = xp[message.author.id].xpmul;
  let nxtLvl = (curlvl * 300) + ((curlvl - (curlvl / 2)) * curlvl) * 50;

  if(!member) {
    if(curlvl >= 100) {
      let rango = "👑"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#f0d800')
      message.channel.send(perfil);
    } else if(curlvl >= 85) {
      let rango = "💎"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#f06b00')
      message.channel.send(perfil);
    } else if(curlvl >= 70) {
      let rango = "💍"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#b8007a')
      message.channel.send(perfil);
    } else if(curlvl >= 55) {
      let rango = "🏆"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#a200b8')
      message.channel.send(perfil);
    } else if(curlvl >= 40) {
      let rango = "🥇"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#5000b8')
      message.channel.send(perfil);
    } else if(curlvl >= 30) {
      let rango = "🥈"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#2500b8')
      message.channel.send(perfil);
    } else if(curlvl >= 20) {
      let rango = "🥉"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#006eb8')
      message.channel.send(perfil);
    } else if(curlvl >= 10) {
      let rango = "🏅"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#00b89f')
      message.channel.send(perfil);
    } else if(curlvl >= 5) {
      let rango = "🎖"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#4ddc9e')
      message.channel.send(perfil);
    } else {
      let rango = "🎓"
      let perfil = new Discord.RichEmbed()
      .setTitle(message.author.tag)
      .setDescription(`Nivel **${curlvl}** | XP **${curxp}/${nxtLvl}** | **x${curmul}** | ${rango}`)
      .setColor('#59ff00')
      message.channel.send(perfil);
    }
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

  if(curmlvl >= 100) {
    let rango = "👑"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#f0d800')
    message.channel.send(perfil);
  } else if(curmlvl >= 85) {
    let rango = "💎"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#f06b00')
    message.channel.send(perfil);
  } else if(curmlvl >= 70) {
    let rango = "💍"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#b8007a')
    message.channel.send(perfil);
  } else if(curmlvl >= 55) {
    let rango = "🏆"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#a200b8')
    message.channel.send(perfil);
  } else if(curmlvl >= 40) {
    let rango = "🥇"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#5000b8')
    message.channel.send(perfil);
  } else if(curmlvl >= 30) {
    let rango = "🥈"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#2500b8')
    message.channel.send(perfil);
  } else if(curmlvl >= 20) {
    let rango = "🥉"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#006eb8')
    message.channel.send(perfil);
  } else if(curmlvl >= 10) {
    let rango = "🏅"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#00b89f')
    message.channel.send(perfil);
  } else if(curmlvl >= 5) {
    let rango = "🎖"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#4ddc9e')
    message.channel.send(perfil);
  } else {
    let rango = "🎓"
    let perfil = new Discord.RichEmbed()
    .setTitle(member.user.tag)
    .setDescription(`Nivel **${curmlvl}** | XP **${curmxp}/${nxtmLvl}** | **x${curmul}** | ${rango}`)
    .setColor('#59ff00')
    message.channel.send(perfil);
  }  
  }
}