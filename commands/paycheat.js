var money = require('discord-money');

exports.run = (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
const dinero = args.join(" ");
money.updateBal(message.author.id, (dinero) /* Value */).then((i) => {
message.channel.send(`**Se ha realizado un cambio de ${dinero}$!**\n**Banco :** ${i.money}$`);
})
}