let players = require("./battle.json");
var fs = require('fs');

module.exports.run = async (client, message, args) => {
let first = players[args[1]]
let second = players[args[0]]
players[args[0]] = first
players[args[1]] = second
fs.writeFile("./commands/DnD/battle.json", JSON.stringify(players), (err) => {if(err) console.log(err)}); 
message.channel.send(`${players.x1y7}${players.x2y7}${players.x3y7}${players.x4y7}${players.x5y7}${players.x6y7}${players.x7y7}\n${players.x1y6}${players.x2y6}${players.x3y6}${players.x4y6}${players.x5y6}${players.x6y6}${players.x7y6}\n${players.x1y5}${players.x2y5}${players.x3y5}${players.x4y5}${players.x5y5}${players.x6y5}${players.x7y5}\n${players.x1y4}${players.x2y4}${players.x3y4}${players.x4y4}${players.x5y4}${players.x6y4}${players.x7y4}\n${players.x1y3}${players.x2y3}${players.x3y3}${players.x4y3}${players.x5y3}${players.x6y3}${players.x7y3}\n${players.x1y2}${players.x2y2}${players.x3y2}${players.x4y2}${players.x5y2}${players.x6y2}${players.x7y2}\n${players.x1y1}${players.x2y1}${players.x3y1}${players.x4y1}${players.x5y1}${players.x6y1}${players.x7y1}`)
}