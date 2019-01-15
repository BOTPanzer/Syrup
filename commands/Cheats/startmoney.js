const ms = require("ms");
var fs = require('fs');
let banco = require("../bancoserver.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.id === "318384645274337280") return;     

  function carmesi() {
    banco[message.guild.id].dinero = banco[message.guild.id].dinero + 5
    fs.writeFile("./commands/bancoserver.json", JSON.stringify(banco), (err) => {
    if(err) console.log(err)
    }); 
    console.log("Añadido 5$ al banco")
    setTimeout(function(){
      carmesi()
    }, ms("2h"));
  }
  carmesi()
}