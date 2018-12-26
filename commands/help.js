const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("🥞Comandos Syrup =")
        .addBlankField()
        .addField("⚙Administración =", "`syp.stats :` Te enseña los miembros del server.\n`syp.carcel (miembro) (razón) :` Manda un aviso a carcel con un miembro y la razón del aviso [solo Admin y Mods].\n`syp.clean (numero) :` Borra la cantidad de mensajes seleccionada entre 2 y 100 [solo Admin y Mods].\n`syp.kick (miembro) (razón) :` Kickea a la persona indicada (Not tested) [solo Admin].\n`syp.ban (miembro) (razón) :` Banea a la persona indicada [solo Admin].\n`syp.direct (miembro) (mensaje) :` Envia un mensaje al miembro [solo Admin].\n`syp.anuncio (anuncio) :` Envia un anuncio a anuncios-to-frescos [solo Admin].\n`syp.addrole (miembro) (rol) :` Añade el rol al miembro seleccionado [solo Admin].")
        .addBlankField()
        .addField("🎮Juegos =", "`syp.flip :` 😄Cara o cruz✝.\n`syp.8ball :` 🎱Te da una respuesta🎱.\n`syp.slots :` 🎰Maquina tragaperras🎰. (Minimo **3$** para jugar).\n`syp.roulette :` 😄Ruleta rusa💀. (Minimo **6$** para jugar).\n`syp.ppt (piedra/papel/tijera) :` 👊Piedra, ✋papel ✌tijera contra la IA🤖. (Minimo **2$** para jugar).")
        .addBlankField()
        .addField("💰Dinero =", "`syp.bank :` 🏛Te dice el **dinero que tienes** en el banco.\n`syp.daily :` 💵Te da **50$** por inutil y estar en paro.\n`syp.shop :` ⚖Abre la tienda.\n`syp.buy (objeto) :` 💳Compra el objeto seleccionado de la tienda.")
        .addBlankField()
        .addField("✨Xp =", "`syp.profile :` 🗿Te enseña tu **xp** y tu **lvl**.\n`syp.levels :` 📜Te enseña las **recompensas** que se dan por **subir de lvl** y cuando se dan.")
        .addBlankField()
        .addField("😆Random =", "`syp.sugerencia (sugerencia) :` 📊Envia una sugerencia de respuestas **si** o **no** al canal sugerencias.\n`syp.ping :` 🔧Calcula el **ping** al enviar un mensaje.\n`syp.say (texto) :` 💬Dice lo que quieras.\n`syp.cs (SteamID) :` 🔪Te enseña tus **stats** del **CS:GO**💣.\n`syp.meme :` 🔀Manda un meme aleatorio de reddit👌.\n`syp.reddit (subreddit) :` 🔀Manda una imagen aleatoria de un subreddit. 🔞(**NSFW** para prevenir)🔞.")
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}
