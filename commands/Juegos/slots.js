const Discord = require("discord.js");
var money = require('discord-money');

exports.run = (client, message, args) => {
let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
let result1 = Math.floor((Math.random() * slots.length));
let result2 = Math.floor((Math.random() * slots.length));
let result3 = Math.floor((Math.random() * slots.length));
let name = message.author.displayName;
let aicon = message.author.displayAvatarURL;
const nomoney = ("No tienes suficiente dinero para hacer eso.");

money.fetchBal(message.author.id).then((i) => {
if (i.money > 3) {
  if (slots[result1] === slots[result2] === slots[result3]) {
    let wEmbed = new Discord.RichEmbed()
        .setFooter("¡Has ganado!", aicon)
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 20 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
    message.channel.send(`**Has ganado 20$!**\n**Banco :** ${i.money}$`);
  })
  } else {
  if (slots[result1] === slots[result2]) {
    let wEmbed = new Discord.RichEmbed()
        .setFooter("¡Has ganado!", aicon)
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 10 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
    message.channel.send(`**Has ganado 10$!**\n**Banco :** ${i.money}$`);
  })
  } else {
  if (slots[result2] === slots[result3]) {
    let wEmbed = new Discord.RichEmbed()
        .setFooter("¡Has ganado!", aicon)
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 10 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
    message.channel.send(`**Has ganado 10$!**\n**Banco :** ${i.money}$`);
  })
  } else {
  let embed = new Discord.RichEmbed()
      .setFooter('¡Has perdido!', aicon)
      .setTitle(':slot_machine:Slots:slot_machine:')
      .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
      .setColor("#f4e842");
  message.channel.send(embed);
  money.updateBal(message.author.id, -3).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
  message.channel.send(`**Has pagado una factura de 3$!**\n**Banco :** ${i.money}$`);
})
}
}
}
} else {
  message.channel.send(nomoney);
}
})
}