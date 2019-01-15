let xp = require("../Xp/xp.json");
var fs = require('fs');

exports.run = (client, message, args) => {

  if(!message.member.id === "318384645274337280") return;

const cheat = args.join(" ");
const num = cheat * 1
let curxp = xp[message.author.id].xp;
xp[message.author.id].xp = curxp + num;

fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});
}