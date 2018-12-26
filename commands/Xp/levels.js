const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("🥞Niveles y rewards de Syrup =")
        .setDescription("**Lvl 10** : Cofre gratis.\n**Lvl 20** : Isla privada por 1 semana.\n**Lvl 30** : NSFW por 1 semana.\n**Lvl 40** : BAN gratis.")
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}
