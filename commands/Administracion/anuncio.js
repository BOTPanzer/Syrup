
exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
var anuncios = client.channels.get("525783411961364484")
const anuncio = args.join(" ");
anuncios.send(anuncio) 
}