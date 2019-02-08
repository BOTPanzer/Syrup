const Discord = require("discord.js");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let pfx = serverconfig[message.guild.id].prefix
    let prfix = "`" + pfx
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("⚙Configuración del server⚙ =")
        .setDescription(prfix + "set <apartado en cursiva> <lo que quieras> :` Cambia un apartado de la configuración del server a lo que quieras **[solo Admin]**.\n" + prfix + "verify <miembro opcional> :`Te añade el rol de *verificacion* que es solo por si **para usar tu servidor se necesita un rol especial**.")
        .addField(`📑**Apartados =**`, `.`)
        .addField(`🛠**Administración =**`, `***prefijo*** | Pefijo comandos bot : **${serverconfig[message.guild.id].prefix}**\n***anuncios*** | Canal de anuncios : **${serverconfig[message.guild.id].anuncios}**\n***sugerencias*** | Canal de sugerencias : **${serverconfig[message.guild.id].sugerencias}**\n***welcome*** | Canal de bienvenida : **${serverconfig[message.guild.id].welcome}**\n***avisosban*** | Numero de avisos para ban : **${serverconfig[message.guild.id].avisosban}**\n***banavisos*** | Se banea un usuario por llegar a **${serverconfig[message.guild.id].avisosban}** avisos (1:si | 0:no) : **${serverconfig[message.guild.id].banavisos}**\n***invitacion*** | Invitación del server : **${serverconfig[message.guild.id].invitacion}**`)
        .addField(`👤**Roles =**`, `***mods*** | Rol de mods : **${serverconfig[message.guild.id].mods}**\n***verificacion*** | Rol de verificacion : **${serverconfig[message.guild.id].verificacion}**\n***police*** | Rol de policia : **${serverconfig[message.guild.id].police}**\n***slut*** | Rol de slut : **${serverconfig[message.guild.id].slut}**\n***cashier*** | Rol de cajero : **${serverconfig[message.guild.id].cashier}**`)
        .addField(`✨**Xp =**`, `***lvl1*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl1}**\n***rollvl1*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl1}** : **${serverconfig[message.guild.id].rollvl1}**\n***lvl2*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl2}**\n***rollvl2*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl2}** : **${serverconfig[message.guild.id].rollvl2}**\n***lvl3*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl3}**\n***rollvl3*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl3}** : **${serverconfig[message.guild.id].rollvl3}**\n***lvl4*** | Level para otorgar el siguiente rol : **${serverconfig[message.guild.id].lvl4}**\n***rollvl4*** | Rol al subir al lvl **${serverconfig[message.guild.id].lvl4}** : **${serverconfig[message.guild.id].rollvl4}**`)
        .addField(`⚖**Tienda =**`, `***comprar.ban*** | Permitido comprar ban en tienda (Not tested) (1:si | 0:no) : **${serverconfig[message.guild.id].compban}**\n***tiempo*** | Tiempo minimo entre cada robo : **${serverconfig[message.guild.id].mtime}**\n***dinero*** | Dinero añadido al banco del server al hablar  : **${serverconfig[message.guild.id].mmoney}**`)
        .setColor('RANDOM');

    message.channel.send(botembed);
}
