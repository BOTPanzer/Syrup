const Discord = require("discord.js");
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    
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
      .setFooter("👍 "+ allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments + " | 😄 " + allowed[randomnumber].data.author + " | ¿No se ve? Pulsa el titulo del post.")
    message.channel.send(embed)
  } catch (err) {
    return console.log(err);
  } 
}
