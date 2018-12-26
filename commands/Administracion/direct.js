
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("No se ha encontrado al miembro.");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No se ha proporcionado un mensaje.";

  await rMember.send(reason)
}