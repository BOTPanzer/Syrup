const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const delay = require('delay');

exports.run = async (client, message, args) => {
  let strike = args[0] * 1
  if(!args[0]) strike = 1
  if(strike > 10) return message.channel.send("Selecciona un numero entre 1 y 10.")

  do {
      var rand = Math.floor(Math.random() * 3);
      let coso = ""
      if(rand === 0) coso = "dankmemes"
      if(rand === 1) coso = "memes"
      if(rand === 2) coso = "memeeconomy"
      try {
        const { body } = await snekfetch
          .get(`https://www.reddit.com/r/${coso}.json?sort=top&t=week`)
          .query({ limit: 5000 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
          .setColor('#00c2d4')
          .setDescription(`[${allowed[randomnumber].data.title}](${allowed[randomnumber].data.url})`)
          .setImage(allowed[randomnumber].data.url)
          .setFooter("👍 "+ allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments)
        message.channel.send(embed)
      } catch (err) {
        return console.log(err);
      } 
      strike = strike - 1
      await delay(8000);
  } while (strike >= 1);
}
