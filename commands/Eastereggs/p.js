const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
var offset = `${args}`.indexOf(".");
offset = `${args}`.indexOf(".", offset + 1);
let result = `${args}`.indexOf(".", offset + 1);
const embed = new Discord.RichEmbed()
  .setColor('#00c2d4')
  .setDescription(`[title](${args})`)
  .setImage("https://i.imgur.com/pOwT5tl.gifv" /*`${args}`.substring(0, result).concat(".gif")*/)
  .setFooter("👍 45 | 💬 76")
message.channel.send(embed);
}