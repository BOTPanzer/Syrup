let serverconfig = require("../serverconfig.json");
let userdata = require("../user.json");
var fs = require('fs');
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  
  if(message.member.hasPermission("ADMINISTRATOR")) {

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor, menciona un miembro valido del servidor");
    if(!member.bannable) 
      return message.reply("No es posible banear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");
  
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "(no se ha proporcionado una razón)";
   
    await member.ban(reason)
      .catch(error => message.channel.send(`Lo siento **${message.author}**. No he podido banear por : ${error}`));
      message.channel.send(`**${member.user}** ha sido baneado por **${message.author}** por **${reason}**`);

  } else if(serverconfig[message.guild.id].compban === "1" && userdata[message.guild.id+"|"+message.author.id].ban === 1) {

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor, menciona un miembro valido del servidor");
    if(!member.bannable) 
      return message.reply("No es posible banear al miembro. ¿Puede ser que tenga un rol mayor al tullo?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "(no se ha proporcionado una razón)";

    await member.send(`Has sido baneado de **${message.channel.guild}** por **1 dia** porque alguien **ha gastado un ban en ti**. **Utiliza esta invitación** mañana para unirte de nuevo. ${serverconfig[message.guild.id].invitacion}`)

    await member.ban(reason)
      .catch(error => message.channel.send(`Lo siento **${message.author}**. No he podido banear por : ${error}`));
      message.channel.send(`**${member.user}** ha sido baneado por **${message.author}** por **${reason}**`);

    userdata[message.guild.id+"|"+message.author.id].ban = 0

    fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
      if(err) console.log(err)
    });

    setTimeout(function(){
      message.guild.unban(member);
    }, ms("1d"));
  
  } else {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}
