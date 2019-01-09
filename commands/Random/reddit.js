const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    
    let objeto = args.slice(0).join(' ');

    try {
        //if (!message.channel.nsfw) return message.reply("Por razones de seguridad debes estar en un canal NSFW.");
        if (objeto === "") { 
            message.channel.send("Por favor, selecciona un subreddit.");
        } else {
        const { body } = await snekfetch
            .get(`https://www.reddit.com/r/${objeto}.json?sort=top&t=week`)
            .query({ limit: 5000 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor('#ff4800')
        .setTitle(allowed[randomnumber].data.title)
        .setDescription(`[Post :](${allowed[randomnumber].data.url})`)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("Autor : " + allowed[randomnumber].data.author + " | Si no se ve usa la URL del post.")
        message.channel.send(embed)
    }
    } catch (err) {
        return console.log(err);
    } 
}



//  .setImage(allowed[randomnumber].data.url)