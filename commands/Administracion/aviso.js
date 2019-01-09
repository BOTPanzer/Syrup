let serverconfig = require("../serverconfig.json");
let userdata = require("../user.json");
var fs = require('fs');

exports.run = (bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}

let member = message.mentions.members.first();
if(!member)
  return message.reply("Por favor, menciona un miembro valido.");

let reason = args.slice(1).join(' ');
if(!reason) reason = "(no se ha proporcionado una razón)";
    
message.channel.send(`**${member.user}** avisado por **${message.author}** por ${reason}. | Avisos totales : ${userdata[message.guild.id+"|"+member.user.id].avisos + 1}`)

userdata[message.guild.id+"|"+member.user.id].avisos = userdata[message.guild.id+"|"+member.user.id].avisos + 1;

fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
  if(err) console.log(err)
});

if(serverconfig[message.guild.id].banavisos === "1") {
  if(userdata[message.guild.id+"|"+member.user.id].avisos >= serverconfig[message.guild.id].avisosban) {
    member.ban("llegar a los " + `${serverconfig[message.guild.id].avisosban}` + " avisos")
    message.channel.send(`**${member.user}** ha sido baneado por **llegar a los ${serverconfig[message.guild.id].avisosban} avisos**`);
    userdata[message.guild.id+"|"+member.user.id].avisos = 0

    fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
      if(err) console.log(err)
    });
  }
}
}
