const Discord = require('discord.js');
let xp = require("./xp.json");

module.exports.run = async (bot, message, args) => {
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;

  if(message.member.roles.some(r=>["Leyenda lvl 75"].includes(r.name)) ) {
    let rango = "🥇"
    let perfil = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setDescription(`Nivel **${curlvl}** | XP **${curxp}** | ${rango}`)
    .setColor('RANDOM')
    message.channel.send(perfil);
  } else if(message.member.roles.some(r=>["Dios lvl 50"].includes(r.name)) ) {
    let rango = "🥈"
    let perfil = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setDescription(`Nivel **${curlvl}** | XP **${curxp}** | ${rango}`)
    .setColor('RANDOM')
    message.channel.send(perfil);
  } else if(message.member.roles.some(r=>["Heroe lvl 35"].includes(r.name)) ) {
    let rango = "🥉"
    let perfil = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setDescription(`Nivel **${curlvl}** | XP **${curxp}** | ${rango}`)
    .setColor('RANDOM')
    message.channel.send(perfil);
  } else if(message.member.roles.some(r=>["Pro lvl 15"].includes(r.name)) ) {
    let rango = "🏅"
    let perfil = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setDescription(`Nivel **${curlvl}** | XP **${curxp}** | ${rango}`)
    .setColor('RANDOM')
    message.channel.send(perfil);
  } else {
    let rango = "🎖"
    let perfil = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setDescription(`Nivel **${curlvl}** | XP **${curxp}** | ${rango}`)
    .setColor('RANDOM')
    message.channel.send(perfil);
  }
}