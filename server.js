const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
var money = require('discord-money');
var fs = require('fs');
let serverconfig = require("./commands/serverconfig.json");
let xp = require("./commands/Xp/xp.json");
let userdata = require("./commands/user.json");
let banco = require("./commands/bancoserver.json");
function doMagic() {
  var rand = ['el nuevo video de Pewd', 'memes en reddit', 'bailes rusos', 'tutoriales de FdFlavia', 'el pack de Carbo', 'anime tiddies', 'a Ricardo bailando', '...  ¿Me perdonas?', 'a el calvo de Cepeda','como ella no te quiere','cosas cristianas','"Top 10 mejores batallas del anime"'];
  return rand[Math.floor(Math.random()*rand.length)];
}


client.on("ready", () => {
  console.log(`THIS is EPIC`); 
  client.user.setActivity( doMagic(), { type: "WATCHING"})
});

client.on("guildCreate", guild => {
  console.log(`Nuevo server unido : ${guild.name} (id: ${guild.id}). ¡Este server tiene ${guild.memberCount} miembros!`);
});

client.on("guildDelete", guild => {
  console.log(`Server salido : ${guild.name} (id: ${guild.id}). Este server tenia ${guild.memberCount} miembros.`);
});



client.on("message", async message => {

  if(message.author.bot) return;

//Sin "div."

  //Serverconfig
  if(!serverconfig[message.guild.id]){
    serverconfig[message.guild.id] = {
      prefix: "syp.",
      mods: "Moderadores",
      verificacion: "Verificado",
      anuncios: "anuncios",
      sugerencias: "sugerencias",
      welcome: "general",
      banavisos: "0",
      avisosban: "5",
      invitacion: "(pon tu url aqui)",
      lvl1: "15",
      rollvl1: "lvl 15",
      lvl2: "40",
      rollvl2: "lvl 40",
      lvl3: "65",
      rollvl3: "lvl 65",
      lvl4: "100",
      rollvl4: "lvl 100",
      compban: "0",
      mtime: "2m",
      mmoney: "3"
    };
  }

  fs.writeFile("./commands/serverconfig.json", JSON.stringify(serverconfig), (err) => {
    if(err) console.log(err)
  }); 
  
 
  //XP
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 0,
      xpmul: 1
    };
  }

  if(xp[message.author.id].xpmul === null) {
    xp[message.author.id].xpmul = 1
  }

  fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let xpAdd = (Math.floor(Math.random() * 3) + 7) * xp[message.author.id].xpmul;
  console.log(message.author.tag + " ha ganado " + xpAdd);

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = (curlvl * 300) + ((curlvl - (curlvl / 2)) * curlvl) * 50;
  xp[message.author.id].xp =  curxp + xpAdd;

  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
      .setTitle(`¡**${message.author.tag}** ha subido de nivel!`)
      .setDescription(`Recompensa por subir al nivel **${curlvl + 1}** : **10$**`)
      .setColor('RANDOM')
    message.channel.send(lvlup).then(msg => {msg.delete(7000)});
    money.updateBal(message.author.id, 10)
  }

  fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  if(curlvl === `${serverconfig[message.guild.id].lvl1}`) {
    message.guild.fetchMember(message.author)
    .then(member => {
      let role = member.guild.roles.find("name", `${serverconfig[message.guild.id].rollvl1}`);
      member.addRole(role).catch(console.error);
    })
  } else if(curlvl === `${serverconfig[message.guild.id].lvl2}`) {
    message.guild.fetchMember(message.author)
    .then(member => {
      let role = member.guild.roles.find("name", `${serverconfig[message.guild.id].rollvl2}`);
      member.addRole(role).catch(console.error);
    })
  } else if(curlvl === `${serverconfig[message.guild.id].lvl3}`) {
    message.guild.fetchMember(message.author)
    .then(member => {
      let role = member.guild.roles.find("name", `${serverconfig[message.guild.id].rollvl3}`);
      member.addRole(role).catch(console.error);
    })
  } else if(curlvl === `${serverconfig[message.guild.id].lvl4}`) {
    message.guild.fetchMember(message.author)
    .then(member => {
      let role = member.guild.roles.find("name", `${serverconfig[message.guild.id].rollvl4}`);
      member.addRole(role).catch(console.error);
    })
  }


  //userdata
  if(!userdata[message.guild.id+"|"+message.author.id]){
    userdata[message.guild.id+"|"+message.author.id] = {
      avisos: 0,
      ban: 0
    };
  }
  
  fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
    if(err) console.log(err)
  });

  
  //Banco server
  if(!banco[message.guild.id]){
    banco[message.guild.id] = {
      dinero: 0,
      robar:"1"
    };
  }
  
  fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
  });

  let din = serverconfig[message.guild.id].mmoney * 1
  banco[message.guild.id].dinero = banco[message.guild.id].dinero + din
  
  fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
  if(err) console.log(err)
  }); 


  //Loteria
  var loteria = Math.floor(Math.random() * 5000);
  if (loteria === 3333) {
    money.updateBal(message.author.id, 200).then((i) => {
    message.channel.send("Un numero **entre 5000** ha decidido que te llevas **200$**");
    })
  } 

  
  //Comienzo
  let prefix = serverconfig[message.guild.id].prefix  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


//Con "div."

  if(message.content.indexOf(`${prefix}`) !== 0) return;


//Otros

  if(command === "help") {
    let commands = require(`./commands/help.js`);
    commands.run(client, message, args);  
  }

  if(command === "config") {  
    let commands = require(`./commands/Administracion/config.js`);
    commands.run(client, message, args);  
  }  

  if(command === "set") {
    let commands = require(`./commands/set.js`);
    commands.run(client, message, args);  
  }

  if(command === "verify") {
    let commands = require(`./commands/verify.js`);
    commands.run(client, message, args);  
  }
  

//Administracion
  
  if(command === "aviso") {
    let commands = require(`./commands/Administracion/aviso.js`);
    commands.run(client, message, args);  
  }

  if(command === "anuncio") {
    let commands = require(`./commands/Administracion/anuncio.js`);
    commands.run(client, message, args);  
  }
  
  if(command === "clear") {
    let commands = require(`./commands/Administracion/clear.js`);
    commands.run(client, message, args);  
  }

  if(command === "botclear") {  
    let commands = require(`./commands/Administracion/botclear.js`);
    commands.run(client, message, args);  
  }  
  
  
  if(command === "nickname") {
    let commands = require(`./commands/Administracion/nickname.js`);
    commands.run(client, message, args);  
  }

  if(command === "tempmute") {
    let commands = require(`./commands/Administracion/mute.js`);
    commands.run(client, message, args);  
  }

  if(command === "unmute") {
    let commands = require(`./commands/Administracion/unmute.js`);
    commands.run(client, message, args);  
  }

  if(command === "direct") {
    let commands = require(`./commands/Administracion/direct.js`);
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

  if(command === "tempban") {
    let commands = require(`./commands/Administracion/tempban.js`);
    commands.run(client, message, args);
  }

  if(command === "addrole") {
    let commands = require(`./commands/Administracion/addrole.js`);
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

  if(command === "rob") {
    let commands = require(`./commands/Dinero/robbery.js`);
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

  if(command === "donate") {
    let commands = require(`./commands/Dinero/donate.js`);
    commands.run(client, message, args);
  }


//Xp

  if(command === "profile") {
    let commands = require(`./commands/Xp/profile.js`);
    commands.run(client, message, args);
  } 


//Musica

  if(command === "m") {
    let commands = require(`./commands/Random/music.js`);
    commands.run(client, message, args);
  }

  if(command === "music") {
    let commands = require(`./commands/Random/music.js`);
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

  if(command === "randnum") {
    let commands = require(`./commands/Random/randnum.js`);
    commands.run(client, message, args);  
  }

  if(command === "stats") {
    let commands = require(`./commands/Random/stats.js`);
    commands.run(client, message, args);  
  }
  
  if(command === "cs") {
    let commands = require(`./commands/Random/cs.js`);
    commands.run(client, message, args);
  }

  if(command === "urban") {
    let commands = require(`./commands/Random/urban.js`);
    commands.run(client, message, args);
  }

  if(command === "meme") {
    let commands = require(`./commands/Random/meme.js`);
    commands.run(client, message, args);
  }

  if(command === "reddit") {
    let commands = require(`./commands/Random/reddit.js`);
    commands.run(client, message, args);
  } 

  if(command === "canvas") {
    let commands = require(`./commands/Random/canvas.js`);
    commands.run(client, message, args);
  }


//Cheats

  if(command === "cheats.pay") {
    let commands = require(`./commands/Cheats/paycheat.js`);
    commands.run(client, message, args);
  }

  if(command === "cheats.server.pay") {
    let commands = require(`./commands/Cheats/payservercheat.js`);
    commands.run(client, message, args);
  }

  if(command === "cheats.xp") {
    let commands = require(`./commands/Cheats/xpcheat.js`);
    commands.run(client, message, args);
  }

  if(command === "cheats.levels") {
    let commands = require(`./commands/Cheats/levelcheat.js`);
    commands.run(client, message, args);
  }

  if(command === "cheats.xpx") {
    let commands = require(`./commands/Cheats/xpxcheat.js`);
    commands.run(client, message, args);
  }

  if(command === "cheats.activity") {
    let commands = require(`./commands/Cheats/activitycheat.js`);
    commands.run(client, message, args);
  }

  if(command === "get") {
    let commands = require(`./commands/Cheats/get.js`);
    commands.run(client, message, args);
  }

  if(command === "start.money") {
    let commands = require(`./commands/Cheats/startmoney.js`);
    commands.run(client, message, args);
  }

  if(command === "p") {
    //let member = message.mentions.members.first();
    //money.fetchBal(member.id).then((i) => { 
    //  message.channel.send(i.money)
    //})
  }
});


client.login(token);




