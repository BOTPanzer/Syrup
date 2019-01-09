const Discord = require("discord.js");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}

message.channel.fetchMessages().then(messages => {
  const botMessages = messages.filter(msg => msg.author.bot);
  message.delete()
  message.channel.bulkDelete(botMessages);
}).catch(err => {
  message.reply(`No se pudieron borrar los mensajes por : ${error}.`)
}); 
  message.channel.send(`🗑 Mensajes **de BOTs** borrados.`).then(message => message.delete(3000));  

}

