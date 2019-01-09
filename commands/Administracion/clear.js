let serverconfig = require("../serverconfig.json");

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}

const deleteCount = parseInt(args[0], 10);
    
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Por favor, proporciona un **numero entre 2 y 100** para el numero de mensajes que seran borrados.");
    
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`No se pudieron borrar los mensajes por : ${error}.`));
  message.channel.send(`🗑 **${deleteCount}** mensajes borrados.`).then(message => message.delete(3000));
}