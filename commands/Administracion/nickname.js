
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
      return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
    }
  }
  
  let personisnotcomtable = message.mentions.members.first();
  let nombre = args.slice(1).join(' ');

  message.guild.members.get(personisnotcomtable.id).setNickname(nombre);
}