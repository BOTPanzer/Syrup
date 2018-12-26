
module.exports.run = async (client, message, args) => {
  if(!message.member.roles.some(r=>["Hacker", "Poseedor de BAN"].includes(r.name)) )
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Por favor, menciona un miembro valido del servidor");
if(!member.bannable) 
  return message.reply("No es posible banear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");

let reason = args.slice(1).join(' ');
if(!reason) reason = "No se ha proporcionado una razón";

await member.ban(reason)
.catch(error => message.reply(`Lo siento ${message.author}. No he podido banear por : ${error}`));
message.reply(`${member.user.tag} ha sido baneado por ${message.author.tag} porque : ${reason}`);
if(!message.member.roles.some(r=>["Poseedor de BAN"].includes(r.name)) )
  return
  message.guild.fetchMember(message.author)
  .then(member => {
    let role = member.guild.roles.find("name", "Poseedor de BAN");
    member.removeRole(role).catch(console.error);
    message.channel.send("Felicidades, has gastado tu BAN");
  });
}