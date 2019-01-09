let serverconfig = require("../serverconfig.json");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
      return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
    }
  }
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Por favor, menciona un miembro valido del servidor");
  if(!member.kickable) 
    return message.reply("No es posible kickear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");
  
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "(no se ha proporcionado una razón)";
  
  await member.kick(reason)
    .catch(error => message.channel.send(`Lo siento **${message.author}**. No he podido kikear por : ${error}`));
    message.channel.send(`**${member.user}** ha sido kikeado por **${message.author}** por **${reason}**`);
}