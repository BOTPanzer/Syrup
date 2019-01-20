var money = require('discord-money');
var fs = require('fs');
let banco = require("../bancoserver.json");
const quiz = [
  { q: "!Un robo ha empezado¡ ¡Ayuda diciendo **stop** para pararlo!", a: ["stop"] }
];
const options = {
  max: 1,
  time: 60000,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  //let dinerorob = banco[message.guild.id].dinero
  message.channel.send("@everyone ¡Un robo ha empezado! ¡Ayuda diciendo **stop** para pararlo!")

  try {
    let hecho = 0
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
      if(winnerMessage.author === message.author) {
        message.channel.send(`${winnerMessage.author} ha cancelado el robo.`)
        hecho = 1
      } else {
        message.channel.send(`¡${winnerMessage.author} ha parado el robo! Recompensa **10$**.`)
        money.updateBal(winnerMessage.author.id, 10)
        message.channel.send(`👮‍El ladrón tendra que pagar una multa de **35$**.`)
        money.updateBal(message.author.id, -35)
        hecho = 1
      }
  } catch (_) {
    message.channel.send(`💰${message.author} ha robado el banco y ganado **120$**.`) //quitar luego
    money.updateBal(message.author.id, 120) //quitar luego
    
    //message.channel.send(`💰${message.author} ha robado el banco y ganado **${dinerorob}$**.`)
    //money.updateBal(message.author.id, dinerorob)
    //banco[message.guild.id].dinero = 0
    //fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    //  if(err) console.log(err)
    //}); 
  }
}