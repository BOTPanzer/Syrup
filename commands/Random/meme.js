const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    
    var rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        const coso = `dankmemes`
        try {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${coso}.json?sort=top&t=week`)
                .query({ limit: 5000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor('#00c2d4')
            .setTitle(allowed[randomnumber].data.title)
            .setDescription(`[Post :](${allowed[randomnumber].data.url})`)
            .setImage(allowed[randomnumber].data.url)
            .setFooter("Autor : " + allowed[randomnumber].data.author + " | Si no se ve usa la URL del post.")
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        } 
    } else if (rand === 1) {
        const coso = `memes`
        try {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${coso}.json?sort=top&t=week`)
                .query({ limit: 5000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor('#00c2d4')
            .setTitle(allowed[randomnumber].data.title)
            .setDescription(`[Post :](${allowed[randomnumber].data.url})`)
            .setImage(allowed[randomnumber].data.url)
            .setFooter("Autor : " + allowed[randomnumber].data.author + " | Si no se ve usa la URL del post.")
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        } 
    } else if (rand === 2) {
        const coso = `memeeconomy`
        try {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${coso}.json?sort=top&t=week`)
                .query({ limit: 5000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Se ha producido un **error**. Puede ser que el post **fuese NSFW**.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor('#00c2d4')
            .setTitle(allowed[randomnumber].data.title)
            .setDescription(`[Post :](${allowed[randomnumber].data.url})`)
            .setImage(allowed[randomnumber].data.url)
            .setFooter("Autor : " + allowed[randomnumber].data.author + " | Si no se ve usa la URL del post.")
            message.channel.send(embed)
        } catch (err) {
            return console.log(err);
        } 
    } 
}
