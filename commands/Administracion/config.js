const Discord = require("discord.js");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let pfx = serverconfig[message.guild.id].prefix
    let prfix = "`" + pfx
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("⚙Configuración del server⚙ =")
        .setDescription(prfix + "set <apartado en cursiva> <lo que quieras> :` Cambia un apartado de la configuración del server a lo que quieras **[solo Admin]**.\n" + prfix + "verify <miembro opcional> :`Te añade el rol de *verificacion* que es solo por si **para usar tu servidor se necesita un rol especial**.\n\n" + `📑**Apartados =**\n\n**🛠Administración =**\n***prefijo*** | Pefijo comandos bot : **${serverconfig[message.guild.id].prefix}**\n***mods*** | Rol de mods : **${serverconfig[message.guild.id].mods}**\n***verificacion*** | Rol de verificacion : **${serverconfig[message.guild.id].verificacion}**\n***anuncios*** | Canal de anuncios : **${serverconfig[message.guild.id].anuncios}**\n***sugerencias*** | Canal de sugerencias : **${serverconfig[message.guild.id].sugerencias}**\n***banavisos*** | Se banea un usuario por llegar a un numero de avisos (1=si 0=no) : **${serverconfig[message.guild.id].banavisos}**\n***avisosban*** | Numero de avisos para ban : **${serverconfig[message.guild.id].avisosban}**\n**✨Xp =**\n***lvl1*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl1}**\n***rollvl1*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl1}** : **${serverconfig[message.guild.id].rollvl1}**\n***lvl2*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl2}**\n***rollvl2*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl2}** : **${serverconfig[message.guild.id].rollvl2}**\n***lvl3*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl3}**\n***rollvl3*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl3}** : **${serverconfig[message.guild.id].rollvl3}**\n***lvl4*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl4}**\n***rollvl4*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl4}** : **${serverconfig[message.guild.id].rollvl4}**\n**⚖Tienda =**\n***comprar.ban*** | Esta permitido comprar un ban en tienda (Not tested) (1=si 0=no) : **${serverconfig[message.guild.id].compban}**`)
        .setColor('RANDOM');

    message.channel.send(botembed);
}
