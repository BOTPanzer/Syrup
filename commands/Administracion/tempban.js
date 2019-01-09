const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
  
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Por favor, menciona un miembro valido del servidor");
  if(!member.bannable) 
    return message.reply("No es posible banear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");

  let time = args[1];
  if(!time) return message.reply("Selecciona el **tiempo de muteo** (numero + s/m/h/d)");
  
  let reason = args.slice(2).join(' ');
  if(!reason) reason = "(no se ha proporcionado una razón)";

  await member.ban(reason)
    .catch(error => message.channel.send(`Lo siento **${message.author}**. No he podido banear por : ${error}`));
    message.channel.send(`**${member.user}** ha sido baneado por **${message.author}** durante **${time}** por **${reason}**`);

  setTimeout(function(){
    message.guild.unban(member);
  }, ms(time));
  }