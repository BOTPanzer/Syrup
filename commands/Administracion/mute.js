const Discord = require("discord.js");
const ms = require("ms");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
    return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
}

let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!tomute) return message.reply("Selecciona un **usuario**.")

if(tomute.hasPermission("ADMINISTRATOR")) {
  return message.reply("El miembro es **administrador** y no se puede mutear.");
}

if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
  return message.reply("El miembro es **moderador** y no se puede mutear.");
}
//#BEBEBE
let muterole = message.guild.roles.find(`name`, "Muteado");
if(!muterole){
  try{
    muterole = await message.guild.createRole({
      name: "Muteado",
      color: "#000000",
      permissions:[
        "READ_MESSAGE_HISTORY",
        "CREATE_INSTANT_INVITE",
        "CHANGE_NICKNAME"
      ]
    })
    message.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      })
    })
  }catch(e){
    console.log(e.stack);
  }
}
let mutetime = args[1];
if(!mutetime) return message.reply("Selecciona el **tiempo de muteo** (numero + s/m/h/d)");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> ha sido **muteado** por **${mutetime}**`);

setTimeout(function(){
  tomute.removeRole(muterole.id);
}, ms(mutetime));
}