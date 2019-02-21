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
  if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) {
    let wEmbed = new Discord.RichEmbed()
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .addField('¡Has ganado 20$!', `**Banco :** ${i.money}$`)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 20)
  } else if (slots[result1] === slots[result2]) {
    let wEmbed = new Discord.RichEmbed()
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .addField('¡Has ganado 8$!', `**Banco :** ${i.money}$`)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 8)
  } else if (slots[result2] === slots[result3]) {
    let wEmbed = new Discord.RichEmbed()
        .setTitle(':slot_machine:Slots:slot_machine:')
        .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
        .addField('¡Has ganado 8$!', `**Banco :** ${i.money}$`)
        .setColor("#f4e842");
    message.channel.send(wEmbed);
    money.updateBal(message.author.id, 8)
  } else {
  let embed = new Discord.RichEmbed()
      .setTitle(':slot_machine:Slots:slot_machine:')
      .addField('Resultado', slots[result1] + slots[result2] + slots[result3], true)
      .addField('¡Has perdido 3$!', `**Banco :** ${i.money}$`)
      .setColor("#f4e842");
  message.channel.send(embed);
  money.updateBal(message.author.id, -3)
  }
} else {
  message.channel.send(nomoney);
}
})
}
