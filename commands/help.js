const Discord = require("discord.js");
let serverconfig = require("./serverconfig.json");

module.exports.run = async (bot, message, args) => {

    let hlp = args.slice(0).join(' ').toLowerCase();
    let pfx = serverconfig[message.guild.id].prefix
    let prfix = "`" + pfx


    if(hlp === "admin channels") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🛠Comandos Administración de canales =")
            .setDescription(prfix + "anuncio <anuncio> :` Envia un anuncio al canal de anuncios. **[Admin y Mods]**\n" + prfix + "clear <numero> :` Borra la cantidad de mensajes seleccionada (2-100). **[Admin y Mods]**\n"+ prfix + "botclear :` Borra los mensajes de los bots. **[Admin y Mods]**")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "admin users") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🛠Comandos Administración de miembros =")
            .setDescription(prfix + "aviso <miembro> <razón> :` Avisas a un miembro por incumplir alguna regla. **[Admin y Mods]**\n" + prfix + "nickname <miembro> <nombre> :` Cambia el nombre del miembro al que quieras. **[Admin y Mods]**\n" + prfix + "tempmute <miembro> <tiempo s/m/h/d> :` **Mutea al miembro** durante el tiempo seleccionado. **[Admin y Mods]**\n" + prfix + "unmute <miembro> :` **Desmutea** al miembro. **[Admin y Mods]**\n" + prfix + "kick <miembro> <razón opcional> :` Kickea al miembro indicada. **[Admin y Mods]**\n" + prfix + "ban <miembro> <razón opcional> :` Banea al miembro indicada. **[Admin]**")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "juegos") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🎮Comandos Juegos =")
            .setDescription(prfix + "flip :` 😄Cara o cruz✝.\n" + prfix + "8ball :` 🎱Te da una respuesta🎱.\n" + prfix + "slots :` 🎰Maquina tragaperras🎰. **(Minimo 3$ para jugar)**.\n" + prfix + "roulette :` 😄Ruleta rusa💀. **(Minimo 4$ para jugar)**.\n" + prfix + "ppt <piedra/papel/tijera> :` 👊Piedra, ✋papel ✌tijera contra la IA🤖. **(Minimo 2$ para jugar)**.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "dinero") {
        let botembed = new Discord.RichEmbed()
            .setTitle("💰Comandos Dinero =")
            .setDescription(prfix + "bank <server/miembro opcional> :` 🏛Te dice el **dinero que tienes, que tiene el server o que tiene el miembro seleccionado** en el banco.\n" + prfix + "rob <miembro>:` 💼Robas **el dinero del banco del server** o **del miembro seleccionado**. ⏳Se tarda **30s** y si alguien dice **stop** se para el robo y **te ponen una multa de 35$**.\n" + prfix + "daily :` 💵Te da **50$** diarios.\n" + prfix + "shop :` ⚖Abre la **tienda** de Divot.\n" + prfix + "buy <objeto> :` 💳**Compra** el **objeto** seleccionado **de la tienda**.\n" + prfix + "donate <miembro> <cantidad> :` 💸**Dona** la **cantidad seleccionada** al **miembro seleccionado**.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "musica") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🎶Comandos Musica =")
            .setDescription(prfix + "m <comando> :` **ejecuta los comandos** de musica siguientes.\n\n📑**Comandos =**\n-`play <nombre/url> :` 🔎**Busca** 10 canciones en Youtube **con el nombre que has puesto**. Elige una con su respectivo numero para reproducirla.\n-`skip :` ↪Pasa a la **siguiente**.\n-`stop :` 🚫**Finaliza** la reproducción.\n-`volume <numero opcional> :` 🔊**Cambia** el **volumen**. Si **no hay numero** te dice el **volumen actual**.\n-`name :` 🔠Te dice la **canción siendo reproducida**.\n-`list :` 📄Te enseña la **lista de canciones** por ser reproducidas.\n-`pause :` ⏸**Pausa** la canción.\n-`resume :` ▶**Reanuda** la canción.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "xp") {
        let botembed = new Discord.RichEmbed()
            .setTitle("✨Comandos Xp =")
            .setDescription(prfix + "profile <miembro opcional> :` 🗿Te enseña tu **lvl** y tu **xp (o la del miembro seleccionado)**.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "random 1") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🎂Comandos Random 1 =")
            .setDescription(prfix + "sugerencia <sugerencia> :` 📊Envia una sugerencia de respuestas ✅ o ❎ al canal **" + serverconfig[message.guild.id].sugerencias + "**.\n" + prfix + "urban <palabra> :` 💻Busca una palabra en el **Urban Dictionary**📚.\n" + prfix + "meme <num 1-10 opcional> :` 👌Meme/s de reddit.\n" + prfix + "reddit <subreddit> :` 🔀Imagen aleatoria de un subreddit.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "random 2") {
        let botembed = new Discord.RichEmbed()
            .setTitle("😆Comandos Random 2 =")
            .setDescription(prfix + "say <texto> :` 💬Dice lo que quieras.\n" + prfix + "ping :` 🔧Calcula el **ping** al enviar un mensaje.\n" + prfix + "stats :` Te enseña los miembros del server.\n" + prfix + "cs <SteamID> :` 🔪Te enseña tus **stats** del **CS:GO**💣 **(Necesario perfil en publico)**.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "dnd") {
        let botembed = new Discord.RichEmbed()
            .setTitle("🐲Comandos D&D =")
            .setDescription(prfix + "dice <caras> :` 🎲Tira un dado de las caras elegidas.\n" + prfix + "battle :` Enseña la batalla.\n" + prfix + "place <player/enemy/blank> <num/num/xy> <xy/xy> :` Coloca lo que quieras en la batalla.\n" + prfix + "move <xy> <xy> :` Cambia las casillas de lugar.")
            .setColor('RANDOM');
        message.channel.send(botembed);
    } else if(hlp === "cheats") {
        message.delete().catch(O_o=>{}); 
        if(!message.member.id === "318384645274337280") return;
        let botembed = new Discord.RichEmbed()
            .setTitle("💻Comandos Cheats =")
            .setDescription(prfix + "cheats.pay <el men> <los dineros> :` El dinero es dinero, aprende algo dinero.\n" + prfix + "cheats.server.pay <los dineros> :` Concurrencia fluencial.\n" + prfix + "cheats.xp <num> :` The higher the better.\n" + prfix + "cheats.xpx <num> :` Same as the previous one.\n" + prfix + "cheats.levels <num> :` Itsa me, Mario.\n" + prfix + "cheats.activity <some optional shit> :` чечевица имеет железо.\n" + prfix + "get <xp/user/config/bank/battle> :` Pos lo ke dise el comando.")
            .setColor('RANDOM');
        message.channel.send(botembed).then(msg => {msg.delete(7000)});
    } else {
    let botembed = new Discord.RichEmbed()
        .setTitle("🥞Comandos Syrup =")
        .addField("⚙Config =", prfix + "config`")
        .addField("🛠Administración 1 =", prfix + "help admin channels`", true)
        .addField("🛠Administración 2 =", prfix + "help admin users`", true)
        .addField("🎮Juegos =", prfix + "help juegos`", true)
        .addField("💰Dinero =", prfix + "help dinero`", true)
        .addField("🎶Musica =", prfix + "help musica`", true)
        .addField("✨Xp =", prfix + "help xp`", true)
        .addField("🎂Random 1 =", prfix + "help random 1`", true)
        .addField("😆Random 2 =", prfix + "help random 2`", true)
        .addField("🐲Dnd =", prfix + "help dnd`", true)
        //.addField("📎URLs =", "- **Invitación** *con permiso admin* : [link](https://discordapp.com/api/oauth2/authorize?client_id=528898963668074496&permissions=8&scope=bot)\n- **Invitación** *sin permiso admin* : [link](https://discordapp.com/api/oauth2/authorize?client_id=528898963668074496&permissions=506981494&scope=bot)")
        .setColor('RANDOM');
    message.channel.send(botembed);
    };
}
