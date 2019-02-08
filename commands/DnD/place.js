var fs = require('fs');
let players = require("./battle.json");

module.exports.run = async (bot, message, args) => {

if (!args[0]) return message.reply("selecciona alguna acción.");

if (args[0] === "player") { //Player
  if(!args[1]) return message.reply("selecciona el personaje.");
  if(!args[2]) return message.reply("selecciona la coordenada.");
  let p = ""
  if(args[1] === "1") p = ":one:"
  if(args[1] === "2") p = ":two:"
  if(args[1] === "3") p = ":three:"
  if(args[1] === "4") p = ":four:"
  if(args[1] === "5") p = ":five:"
  if(args[1] === "6") p = ":six:"
  if(args[1] === "7") p = ":seven:"
  players[args[2]] = p
  fs.writeFile("./commands/DnD/battle.json", JSON.stringify(players), (err) => {if(err) console.log(err)}); 
} else if (args[0] === "enemy") { //Enemy
  if(!args[1]) return message.reply("selecciona el enemigo.");
  if(!args[2]) return message.reply("selecciona alguna coordenada.");
  let p = ""
  if(args[1] === "1") p = ":regional_indicator_a:"
  if(args[1] === "2") p = ":regional_indicator_b:"
  if(args[1] === "3") p = ":regional_indicator_c:"
  if(args[1] === "4") p = ":regional_indicator_d:"
  if(args[1] === "5") p = ":regional_indicator_e:"
  if(args[1] === "6") p = ":regional_indicator_f:"
  if(args[1] === "7") p = ":regional_indicator_g:"
  players[args[2]] = p
  fs.writeFile("./commands/DnD/battle.json", JSON.stringify(players), (err) => {if(err) console.log(err)}); 
} else  if (args[0] === "blank") { //Blank
  if(!args[1]) return message.reply("selecciona alguna coordenada.");
  players[args[1]] = ":white_large_square:"
  fs.writeFile("./commands/DnD/battle.json", JSON.stringify(players), (err) => {if(err) console.log(err)}); 
} else {
  return message.reply("selecciona una acción valida.")
}
message.channel.send(`${players.x1y7}${players.x2y7}${players.x3y7}${players.x4y7}${players.x5y7}${players.x6y7}${players.x7y7}\n${players.x1y6}${players.x2y6}${players.x3y6}${players.x4y6}${players.x5y6}${players.x6y6}${players.x7y6}\n${players.x1y5}${players.x2y5}${players.x3y5}${players.x4y5}${players.x5y5}${players.x6y5}${players.x7y5}\n${players.x1y4}${players.x2y4}${players.x3y4}${players.x4y4}${players.x5y4}${players.x6y4}${players.x7y4}\n${players.x1y3}${players.x2y3}${players.x3y3}${players.x4y3}${players.x5y3}${players.x6y3}${players.x7y3}\n${players.x1y2}${players.x2y2}${players.x3y2}${players.x4y2}${players.x5y2}${players.x6y2}${players.x7y2}\n${players.x1y1}${players.x2y1}${players.x3y1}${players.x4y1}${players.x5y1}${players.x6y1}${players.x7y1}`)
}