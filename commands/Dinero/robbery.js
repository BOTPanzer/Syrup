var money = require('discord-money');
var fs = require('fs');
let serverconfig = require("../serverconfig.json");
let banco = require("../bancoserver.json");
const ms = require("ms");
const quiz = [
  { q: "!Un robo ha empezado¡ ¡Ayuda diciendo **stop** para pararlo!", a: ["stop"] }
];
const options = {
  max: 1,
  time: 60000,
  errors: ["time"],
};

module.exports.run = async (client, message, args) => {
  
if(banco[message.guild.id].robar === "1") {
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  let dinerorob = banco[message.guild.id].dinero
  banco[message.guild.id].robar = "0"
  fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
  }); 
  message.channel.send("@everyone ¡Un robo ha empezado! ¡Ayuda diciendo **stop** para pararlo!")

  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
      if(winnerMessage.author === message.author) {
        message.channel.send(`${winnerMessage.author} ha cancelado el robo.`)
        
        setTimeout(function(){
          banco[message.guild.id].robar = "1"
          fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
            if(err) console.log(err)
          }); 
        }, ms(serverconfig[message.guild.id].mtime));
      } else {
        message.channel.send(`¡${winnerMessage.author} ha parado el robo! Recompensa **10$**.`)
        money.updateBal(winnerMessage.author.id, 10)
        message.channel.send(`👮‍El ladrón tendra que pagar una multa de **35$**.`)
        money.updateBal(message.author.id, -35)

        setTimeout(function(){
          banco[message.guild.id].robar = "1"
          fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
            if(err) console.log(err)
          }); 
        }, ms(serverconfig[message.guild.id].mtime));
      }
  } catch (_) {
    message.channel.send(`💰${message.author} ha robado el banco y ganado **${dinerorob}$**.`)
    money.updateBal(message.author.id, dinerorob)
    banco[message.guild.id].dinero = 0
    fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
      if(err) console.log(err)
    }); 

  setTimeout(function(){
    banco[message.guild.id].robar = "1"
    fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
      if(err) console.log(err)
    }); 
  }, ms(serverconfig[message.guild.id].mtime));
  }
} else {
  message.channel.send("Espera un poco más antes de producir otro robo.")
}
}