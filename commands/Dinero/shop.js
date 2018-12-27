const Discord = require("discord.js");
var money = require('discord-money');

//poner tu dinero al principio

module.exports.run = async (bot, message, args) => {
  money.fetchBal(message.author.id).then((i) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
      .setThumbnail(bicon)
      .setTitle("🥞Tienda Syrup =")
      .setDescription("**AVISO**, si llegas al **numero maximo** al comprar un objeto se te quitara el dinero pero **no se te dara** el objeto. Cuando se **acabe** el efecto del del objeto ya podrás volver a comprarlo.")
      .addField("Banco :", `${i.money}$`)
      .addBlankField()
      .addField("🎁Objetos =", "❌ **ban** : Compras el permiso de **usar el comando** `syp.ban (miembro) (razón)` **1 vez**, (en 1 semana se le desbaneará a la persona baneada).\n**Max = 1** | **Coste** = 2000$\n\n🔞 **nsfw** : Compras el permiso de usar **comandos NSFW en canales que no lo son** con moderación durante 1 semana. (Si te pasas puedes ser baneado).\n**Max = 1** | **Coste** = 1500$\n\n🏝 **isla (numero de la isla)** : Compras **una isla privada solo para ti** en la que puedes hacer lo que quieras durante 1 semana.\n**Max = 1** | **Coste** = 750$\n\n📦 **chest** : Compras **un cofre** en el que te puede tocar dinero, alguno de los objetos de arriba o nada.\n**Max = ∞** | **Coste** = 25$")
      .addBlankField()
      .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
      .setColor('RANDOM');

  message.channel.send(botembed);
  })}
