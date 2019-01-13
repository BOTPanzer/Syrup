var money = require('discord-money');

exports.run = (client, message, args) => {
    
if(!message.member.id === "318384645274337280") return message.reply("No dev, sorry :(");

const dinero = args.join(" ");
money.updateBal(message.author.id, (dinero) /* Value */).then((i) => {
message.channel.send(`¡Se ha realizado un cambio de **${dinero}$**!\nBanco : **${i.money}$**`);
})
}