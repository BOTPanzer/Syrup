
module.exports.run = async (client, message, args) => {
if(!message.member.roles.some(r=>["Hacker", "Mods"].includes(r.name)) )
  return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");

// get the delete count, as an actual number.
const deleteCount = parseInt(args[0], 10);
    
// Ooooh nice, combined conditions. <3
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Por favor, proporciona un numero entre 2 y 100 para el numero de mensajes que seran borrados");
    
// So we get our messages, and delete them. Simple enough, right?
 const fetched = await message.channel.fetchMessages({limit: deleteCount});
 message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`No se pudieron borrar los mensajes por : ${error}`));  
}