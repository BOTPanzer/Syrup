const ms = require("ms");
var fs = require('fs');
let banco = require("../bancoserver.json");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.id === "318384645274337280") return;     

  function carmesi() {
    let din = serverconfig[message.guild.id].mmoney * 1
    banco[message.guild.id].dinero = banco[message.guild.id].dinero + din
    fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
    }); 
    console.log(`Añadido ${serverconfig[message.guild.id].mmoney}$ al banco`)
    setTimeout(function(){
      carmesi()
    }, ms(`${serverconfig[message.guild.id].mtime}`));
  }
  carmesi()
}