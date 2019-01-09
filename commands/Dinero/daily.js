var money = require('discord-money');
var moment = require('moment');

exports.run = (client, message, args) => {
    
if (money[message.author.username + message.guild.name] != moment().format('L')) {
    money[message.author.username + message.guild.name] = moment().format('L')
    money.updateBal(message.author.id, 50).then((i) => {
        message.channel.send({embed: {
            color: 3447003,
            description: `${message.author}, has recivido tus **50$** diarios. **Banco :** ${i.money}$.`,
            author: {
            name: `${message.author.username}#${message.author.discriminator}`,
            icon_url: message.author.avatarURL 
            }
        }});
    })
} else {
    message.channel.send({embed: {
        color: 3447003,
        description: `${message.author}, ya has recivido tus **50$** diarios. Vuelve más tarde crack, **` + moment().endOf('day').fromNow() + '**.',
        author: {
            name: `${message.author.username}#${message.author.discriminator}`,
            icon_url: message.author.avatarURL 
        }
    }});
}
}