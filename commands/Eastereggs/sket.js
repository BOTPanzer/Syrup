const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const delay = require('delay');

exports.run = async (client, message, args) => {
  let strike = args[0] * 1
  if(!args[0]) strike = 1
  if(strike > 10) return message.channel.send("Selecciona un numero entre 1 y 10.")

  do {
      var rand = Math.floor(Math.random() * 6);
      let coso = ""
      if(rand === 0) coso = "grool"
      if(rand === 1) coso = "LegalTeens"
      if(rand === 2) coso = "gonewild"
      if(rand === 3) coso = "realgirls"
      if(rand === 4) coso = "nsfwcosplay"
      if(rand === 5) coso = "boobs"
      if(rand === 6) coso = "Pussy"
      try {
        const { body } = await snekfetch
          .get(`https://www.reddit.com/r/${coso}.json?sort=top&t=week`)
          .query({ limit: 5000 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        if(allowed[randomnumber].data.url.includes("gfycat")) {
          message.channel.send(`**${allowed[randomnumber].data.title}**\n${allowed[randomnumber].data.url}`);
        } else {
          if(allowed[randomnumber].data.url.includes("/imgur.com")) {
            allowed[randomnumber].data.url = allowed[randomnumber].data.url.replace(/imgur.com/g,"i.imgur.com");
          }
          const embed = new Discord.RichEmbed()
            .setColor('#00c2d4')
            .setDescription(`[${allowed[randomnumber].data.title}](${allowed[randomnumber].data.url})`)
            .setImage(`${allowed[randomnumber].data.url}`)
            .setFooter("👍 "+ allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments)
          message.channel.send(embed)
        }
      } catch (err) {return console.log(err)} 
      strike = strike - 1
      await delay(5000);
  } while (strike >= 1);
}
