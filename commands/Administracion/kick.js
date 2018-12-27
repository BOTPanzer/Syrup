
module.exports.run = async (client, message, args) => {
  if(!message.member.roles.some(r=>["Hacker", "N WORD TELLERS"].includes(r.name)) )
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
  return message.reply("Por favor, menciona un miembro valido del servidor");
if(!member.kickable) 
  return message.reply("No es posible kickear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");
  
let reason = args.slice(1).join(' ');
if(!reason) reason = "No se ha proporcionado una razón";
  
await member.kick(reason)
    .catch(error => message.reply(`Lo siento ${message.author}. No he podido kikear por : ${error}`));
  message.reply(`${member.user.tag} ha sido kikeado por ${message.author.tag} porque : ${reason}`);
}