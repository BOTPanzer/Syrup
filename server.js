const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
let xp = require("./commands/Xp/xp.json");
var fs = require('fs');
var money = require('discord-money');
const token = process.env.token;
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});


client.on("ready", () => {
  function doMagic8BallVoodoo() {
    var rand = ['bailes rusos', 'tutoriales de FdFlavia', 'el pack de Carbo'];
    return rand[Math.floor(Math.random()*rand.length)];
  }
  console.log(`THIS is EPIC`); 
  client.user.setActivity( doMagic8BallVoodoo(), { type: "WATCHING"})
})

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
});

client.on('guildMemberAdd', (guildMember) => {
});

client.on("MessageReactionAdd", (reaction, user) => {
});



client.on("message", async message => {
  if(message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
//Sin "syp"

var loteria = Math.floor(Math.random() * 1000);
if (loteria === 333) {
  money.updateBal(message.author.id, 200).then((i) => {
    message.channel.send("Un numero **entre 1000** ha decidido que te llevas **200$**");
  })
}

if (message.channel.name === "pokécord") {
//nada :v
} else {
  let xpAdd = Math.floor(Math.random() * 3) + 7;
  console.log(message.author.tag + " won " + xpAdd);
  
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
  
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("¡Has subido de nivel!")
    .setDescription(`Recompensa por subir al nivel **${curlvl + 1}** : **10$**`)
    .setColor('RANDOM')

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
    money.updateBal(message.author.id, 10).then((i) => {
      
    if (curlvl + 1 === 10) {
      let commands = require(`./commands/Xp/chest.js`);
      commands.run(client, message, args);
    }
    if (curlvl + 1 === 20) {
      let commands = require(`./commands/Xp/isla.js`);
      commands.run(client, message, args);
    }
    if (curlvl + 1 === 30) {
      let commands = require(`./commands/Xp/nsfw.js`);
      commands.run(client, message, args); 
    }
    if (curlvl + 1 === 40) {
      let commands = require(`./commands/Xp/ban.js`);
      commands.run(client, message, args); 
    }
  })
  } 
  fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
}


//Con "syp"

  if(message.content.indexOf(config.prefix) !== 0) return;


//Otros

  if(command === "help") {
    let commands = require(`./commands/help.js`);
    commands.run(client, message, args);  
  }

  if(command === "verify") {
    let commands = require(`./commands/verify.js`);
    commands.run(client, message, args);  
  }


//Administracion

  if(command === "carcel") {
    let commands = require(`./commands/Administracion/carcel.js`);
    commands.run(client, message, args);  
  }

  if(command === "kick") {
    let commands = require(`./commands/Administracion/kick.js`);
    commands.run(client, message, args);
  }
  
  if(command === "ban") {
    let commands = require(`./commands/Administracion/ban.js`);
    commands.run(client, message, args);
  }
  
  if(command === "clean") {
    let commands = require(`./commands/Administracion/clean.js`);
    commands.run(client, message, args);  
  }

  if(command === "direct") {
    let commands = require(`./commands/Administracion/direct.js`);
    commands.run(client, message, args);  
  }

  if(command === "addrole") {
    let commands = require(`./commands/addrole.js`);
    commands.run(client, message, args);  
  }

  if(command === "stats") {
    let commands = require(`./commands/Administracion/stats.js`);
    commands.run(client, message, args);  
  }
  
  if(command === "anuncio") {
    let commands = require(`./commands/Administracion/anuncio.js`);
    commands.run(client, message, args);  
  }


//Juegos

  if(command === "flip") {
    let commands = require(`./commands/Juegos/flip.js`);
    commands.run(client, message, args);
  }
  
  if(command === "slots") {
    let commands = require(`./commands/Juegos/slots.js`);
    commands.run(client, message, args);
  }

  if(command === "8ball") {
    let commands = require(`./commands/Juegos/8ball.js`);
    commands.run(client, message, args);
  }

  if(command === "roulette") {
    let commands = require(`./commands/Juegos/roulette.js`);
    commands.run(client, message, args);
  }

  if(command === "ppt") {
    let commands = require(`./commands/Juegos/ppt.js`);
    commands.run(client, message, args);
  }


//Dinero

  if(command === "bank") {
    let commands = require(`./commands/Dinero/bank.js`);
    commands.run(client, message, args);
  }

  if(command === "daily") {
    let commands = require(`./commands/Dinero/daily.js`);
    commands.run(client, message, args);
  }

  if(command === "shop") {
    let commands = require(`./commands/Dinero/shop.js`);
    commands.run(client, message, args);
  }

  if(command === "buy") {
    let commands = require(`./commands/Dinero/buy.js`);
    commands.run(client, message, args);
  }

  if(command === "paycheat") {
    let commands = require(`./commands/paycheat.js`);
    commands.run(client, message, args);
  }


//Random

  if(command === "sugerencia") {
    let commands = require(`./commands/Random/sugerencia.js`);
    commands.run(client, message, args);
  }

  if(command === "ping") {
    let commands = require(`./commands/Random/ping.js`);
    commands.run(client, message, args);  
  }
  
  if(command === "say") {
    let commands = require(`./commands/Random/say.js`);
    commands.run(client, message, args);  
  }
  
  if(command === "cs") {
    let commands = require(`./commands/Random/cs.js`);
    commands.run(client, message, args);
  }

  if(command === "reddit") {
    let commands = require(`./commands/Random/reddit.js`);
    commands.run(client, message, args);
  }

  if(command === "meme") {
    let commands = require(`./commands/Random/meme.js`);
    commands.run(client, message, args);
  }


//Xp

  if(command === "profile") {
    let commands = require(`./commands/Xp/profile.js`);
    commands.run(client, message, args);
  }

  if(command === "levels") {
    let commands = require(`./commands/Xp/levels.js`);
    commands.run(client, message, args);
  }
});



client.login(token);



