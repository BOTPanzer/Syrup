var money = require('discord-money');
var moment = require('moment');
let serverconfig = require("../serverconfig.json");

exports.run = (client, message, args) => {
  
let mny = 40
if(message.member.roles.some(r=>[serverconfig[message.guild.id].police].includes(r.name))) mny = 40
if(message.member.roles.some(r=>[serverconfig[message.guild.id].slut].includes(r.name))) mny = 45
if(message.member.roles.some(r=>[serverconfig[message.guild.id].cashier].includes(r.name))) mny = 50
if(message.member.roles.some(r=>[serverconfig[message.guild.id].manager].includes(r.name))) mny = 50

if (money[message.author.username + message.guild.name] != moment().format('L')) {
    money[message.author.username + message.guild.name] = moment().format('L')
    money.updateBal(message.author.id, mny).then((i) => {
        message.channel.send({embed: {
            color: 12745742,
            description: `${message.author}, has recivido tus **${mny}$** diarios. **Banco :** ${i.money}$.`,
            author: {name: `${message.author.username}`,icon_url: message.author.avatarURL}
        }});
    })
} else {
    message.channel.send({embed: {
        color: 12745742,
        description: `${message.author}, ya has recivido tus **${mny}$** diarios crack. Vuelve **` + moment().endOf('day').fromNow() + '**.',
        author: {name: `${message.author.username}`, icon_url: message.author.avatarURL}
    }});
}
}