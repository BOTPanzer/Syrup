const Discord = require('discord.js');
const client = new Discord.Client();
let xp = require("./xp.json");

module.exports.run = async (bot, message, args) => {
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let perfil = new Discord.RichEmbed()
  .setTitle(message.author.tag)
  .setDescription(`Nivel **${curlvl}** | XP **${curxp}**`)
  .setColor('RANDOM')

  message.channel.send(perfil);
}