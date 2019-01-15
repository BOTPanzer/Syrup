let serverconfig = require("../serverconfig.json");

exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(!message.member.roles.some(r=>[serverconfig[message.guild.id].mods].includes(r.name))) {
      return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
    }
  }

  const anuncio = args.join(" ");
  if(!anuncio) return message.channel.send("No se ha proporcionado un anuncio");
  bot.channels.find("name",`${serverconfig[message.guild.id].anuncios}`).send(`${anuncio}`) 
}