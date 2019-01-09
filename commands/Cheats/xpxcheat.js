let xp = require("../Xp/xp.json");
var fs = require('fs');

exports.run = (client, message, args) => {

if(!message.member.id === "318384645274337280") return message.reply("No dev, sorry :(");


const cheat = args.join(" ");
if(!cheat) return
const num = cheat * 1
xp[message.author.id].xpmul = num

fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
  });
}