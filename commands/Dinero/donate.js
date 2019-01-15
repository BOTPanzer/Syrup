var money = require('discord-money');

module.exports.run = async (client, message, args) => {
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor, menciona un miembro valido del servidor");
  
    let reason = args[1];
    if(!reason) 
      return message.reply("Proporciona una cantidad.");
   
    if(reason < 0) 
      return message.reply("Cantidad no valida.");

    money.fetchBal(message.author.id).then((i) => {
    if (i.money < reason) {
      return message.reply("Primero lo ganas, luego lo donas.");
    } else {
      money.updateBal(message.author.id, -reason)
      money.updateBal(member.id, reason)
      message.channel.send(`**${message.author}** ha donado **${reason}$** a **${member.user}**.`);
    }
    })


}