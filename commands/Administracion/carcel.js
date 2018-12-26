
exports.run = (client, message, args) => {
if(!message.member.roles.some(r=>["Hacker", "Mods"].includes(r.name)) )
  return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
    
let member = message.mentions.members.first();
if(!member)
  return message.reply("Por favor, menciona un miembro valido del servidor");

let reason = args.slice(1).join(' ');
if(!reason) reason = "No se ha proporcionado una razón";
    
var generalChannel = client.channels.get("521403709238804481") // Replace with known channel ID
generalChannel.send(`**${member.user.tag}** avisado por **${message.author.tag}** porque ${reason}`) 
}