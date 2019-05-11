const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')

  if(args[0] === "help" || !args[0]) {
    const hlp = new Discord.RichEmbed()
      .setTitle(`Comandos =`)
      .setDescription(`neko\nlewd\npussy_jpg\ntits\nboobs\npwankg\nsolo\nsolog\nyuri\npussy\nnsfw_neko_gif\nlewdk\nles\nketa\nhololewd\nRandom_hentai_gif`)
      .setColor(`RANDOM`)
    message.channel.send(hlp);
  } else {
    superagent.get(`https://nekos.life/api/v2/img/${args[0]}`)
    .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
        .setDescription(`[Neko](${response.body.url})`)
        .setImage(response.body.url)
        .setColor(`RANDOM`)
      message.channel.send(lewdembed);
    })
  }
}