const Discord = require("discord.js");
const ms = require("ms");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}

let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!tomute) return message.reply("Selecciona un **usuario**.")

let muterole = message.guild.roles.find(`name`, "Muteado");
tomute.removeRole(muterole.id);
message.channel.send(`<@${tomute.id}> ha sido **desmuteado**.`)
}