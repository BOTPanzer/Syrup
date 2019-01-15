const Discord = require("discord.js");
let serverconfig = require("./serverconfig.json");

module.exports.run = async (bot, message, args) => {

    let hlp = args[0]

    if(hlp === "admin") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("🛠Comandos Administración =")
            .addBlankField()
            .addField("Administración de canales =", prfix + "anuncio <anuncio> :` Envia un anuncio al canal de anuncios. **[Admin y Mods]**\n" + prfix + "clear <numero> :` Borra la cantidad de mensajes seleccionada entre 2 y 100. **[Admin y Mods]**\n"+ prfix + "botclear :` Borra los mensajes de los bots. **[Admin y Mods]**")
            .addBlankField()
            .addField("Administración de miembros =", prfix + "aviso <miembro> <razón> :` Avisas a un miembro por hacer algo malo. Si llega a 3 avisos será baneado solo. **[Admin y Mods]**\n" + prfix + "nickname <miembro> <nombre> :` Cambia el nombre del miembro seleccionado al que quieras. **[Admin y Mods]**\n" + prfix + "tempmute <miembro> <tiempo s/m/h/d> :` **Mutea al miembro seleccionado** durante el tiempo seleccionado. (Not tested) **[Admin y Mods]**\n" + prfix + "unmute <miembro> :` **Desmutea** al usuario. **[Admin y Mods]**\n" + prfix + "direct <miembro> <mensaje> :` Envia un mensaje al miembro seleccionado. **[Admin y Mods]**\n" + prfix + "kick <miembro> <razón opcional> :` Kickea a la persona indicada. **[Admin y Mods]**\n" + prfix + "ban <miembro> <razón opcional> :` Banea a la persona indicada. **[Admin]**\n" + prfix + "tempban <miembro> <tiempo s/m/h/d> <razón opcional> :` Banea a la persona indicada durante el tiempo indicado. **[Admin]**\n" + prfix + "addrole <miembro> <rol> :` Añade el rol al miembro seleccionado. **[Admin]**")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "juegos") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("🎮Comandos Juegos =")
            .setDescription(prfix + "flip :` 😄Cara o cruz✝.\n" + prfix + "8ball :` 🎱Te da una respuesta🎱.\n" + prfix + "slots :` 🎰Maquina tragaperras🎰. **(Minimo 3$ para jugar)**.\n" + prfix + "roulette :` 😄Ruleta rusa💀. **(Minimo 4$ para jugar)**.\n" + prfix + "ppt <piedra/papel/tijera> :` 👊Piedra, ✋papel ✌tijera contra la IA🤖. **(Minimo 2$ para jugar)**.")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "dinero") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("💰Comandos Dinero =")
            .setDescription(prfix + "bank <server opcional> :` 🏛Te dice el **dinero que tienes o que tiene el server** en el banco.\n" + prfix + "rob :` 💼Robas **el dinero del banco del server**. ⏳Se tarda **1min** y si alguien dice **stop** se para el robo y **te ponen una multa de 35$**.\n" + prfix + "daily :` 💵Te da **50$** diarios.\n" + prfix + "shop :` ⚖Abre la **tienda** de Divot\n" + prfix + "buy <objeto> :` 💳**Compra** el **objeto** seleccionado **de la tienda**.\n" + prfix + "donate <miembro> <cantidad> :` 💸**Dona** la **cantidad seleccionada** al **miembro seleccionado**.")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "musica") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("🎶Comandos Musica =")
            .setDescription(prfix + "music/m <comando> :` **ejecuta los comandos** de musica siguientes.\n\n📑**Comandos =**\n-`play <nombre> :` 🔎**Busca** 10 canciones en Youtube **con el nombre que has puesto**. Elige una con su respectivo numero para reproducirla.\n-`skip :` ↪Pasa a la **siguiente**.\n-`stop :` 🚫**Finaliza** la reproducción.\n-`volume <numero opcional> :` 🔊**Cambia** el **volumen**. Si **no hay numero** te dice el **volumen actual**.\n-`name :` 🔠Te dice la **canción siendo reproducida**.\n-`list :` 📄Te enseña la **lista de canciones** por ser reproducidas.\n-`pause :` ⏸**Pausa** la canción.\n-`resume :` ▶**Reanuda** la canción.")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "random") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("😆Comandos Random =")
            .setDescription(prfix + "sugerencia <sugerencia> :` 📊Envia una sugerencia de respuestas ✅ o ❎ al canal sugerencias.\n" + prfix + "ping :` 🔧Calcula el **ping** al enviar un mensaje.\n" + prfix + "say <texto> :` 💬Dice lo que quieras.\n" + prfix + "randnum <num menor> <num mayor> :` 🔀Elige un numero aleatorio entre los dos escogidos.\n" + prfix + "stats :` Te enseña los miembros del server.\n" + prfix + "cs <SteamID> :` 🔪Te enseña tus **stats** del **CS:GO**💣 **(Necesario perfil en publico)**.\n" + prfix + "urban <palabra> :` 💻Busca una palabra en el **Urban Dictionary**📚 **(estará en ingles)**.\n" + prfix + "canvas <num 5-50> :` 🖋Canvas de dibujo🎨.\n" + prfix + "meme :` 🔀Meme aleatorio de reddit👌.\n" + prfix + "reddit <subreddit> :` 🔀Imagen aleatoria de un subreddit.")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "xp") {
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("✨Comandos Xp =")
            .setDescription(prfix + "profile <miembro opcional> :` 🗿Te enseña tu **lvl** y tu **xp (o la del miembro seleccionado)**.")
            .setColor('RANDOM');
    
        message.channel.send(botembed);
    } else if(hlp === "cheats") {
        message.delete().catch(O_o=>{}); 
        if(!message.member.id === "318384645274337280") return;
        let bicon = bot.user.displayAvatarURL;
        let pfx = serverconfig[message.guild.id].prefix
        let prfix = "`" + pfx
        let botembed = new Discord.RichEmbed()
            .setThumbnail(bicon)
            .setTitle("💻Comandos Cheats =")
            .setDescription(prfix + "cheats.pay <dineros> :` El dinero es dinero, aprende algo dinero.\n" + prfix + "cheats.xp <num> :` The higher the better.\n" + prfix + "cheats.xpx <num> :` Same as the previous one.\n" + prfix + "cheats.levels <num> :` Its me, Mario.\n" + prfix + "cheats.xpx :` multiplicate por cero.\n" + prfix + "cheats.activity :` чечевица имеет железо.\n" + prfix + "get <xp/user/serverconfig> :` Pos lo ke dise el comando.\n" + prfix + "start.money :` Empieza a funcionar la economia comunista.")
            .setColor('RANDOM');
    
        message.channel.send(botembed).then(msg => {msg.delete(7000)});
    } else {
    let bicon = bot.user.displayAvatarURL;
    let pfx = serverconfig[message.guild.id].prefix
    let prfix = "`" + pfx
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .setTitle("🥞Comandos Syrup =")
        .addField("⚙Config =", prfix + "config :` Configuración del server.")
        .addField("🛠Administración =", prfix + "help admin`", true)
        .addField("🎮Juegos =", prfix + "help juegos`", true)
        .addField("💰Dinero =", prfix + "help dinero`", true)
        .addField("🎶Musica =", prfix + "help musica`", true)
        .addField("😆Random =", prfix + "help random`", true)
        .addField("✨Xp =", prfix + "help xp`", true)
        //.addField("📎URLs =", "- **Invitación** *con permiso admin* : [link](https://discordapp.com/api/oauth2/authorize?client_id=528898963668074496&permissions=8&scope=bot)\n- **Invitación** *sin permiso admin* : [link](https://discordapp.com/api/oauth2/authorize?client_id=528898963668074496&permissions=506981494&scope=bot)")
        .setColor('RANDOM');
    message.channel.send(botembed);
    };
}
