var money = require('discord-money');
var moment = require('moment');

exports.run = (client, message, args) => {
    
if (money[message.author.username + message.guild.name] != moment().format('L')) {
    money[message.author.username + message.guild.name] = moment().format('L')
    money.updateBal(message.author.id, 50).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
        message.channel.send({embed: {
            color: 3447003,
            description: `Has recivido tus **50$** diarios. **Banco :** ${i.money}$.`,
            author: {
            name: `${message.author.username}#${message.author.discriminator}`,
            icon_url: message.author.avatarURL 
            }
        }});
    })
} else {
    message.channel.send({embed: {
        color: 3447003,
        description: 'Ya has recivido tu \`syp.daily`\. Vuelve más tarde **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
        author: {
            name: `${message.author.username}#${message.author.discriminator}`,
            icon_url: message.author.avatarURL 
        }
    }});
}
}