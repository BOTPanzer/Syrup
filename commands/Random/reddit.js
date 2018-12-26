const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
    
    let objeto = args.slice(0).join(' ');

    if(!message.member.roles.some(r=>["NSFW leader"].includes(r.name))) {
        try {
            if (!message.channel.nsfw) return message.reply("Por razones de seguridad debes estar en un canal NSFW.");
            if (objeto === "") { 
                message.channel.send("Selecciona un subreddit. `syp.reddit (subreddit)`.");
            } else {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${objeto}.json?sort=top&t=week`)
                .query({ limit: 3000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Reintentalo mas tarde.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(allowed[randomnumber].data.title)
            .setDescription("Subido por : " + allowed[randomnumber].data.author)
            .setImage(allowed[randomnumber].data.url)
            .addField("Si no se ve usa la URL :", (allowed[randomnumber].data.url))
            .setFooter("Reddit")
            message.channel.send(embed)
        }
        } catch (err) {
            return console.log(err);
        } 
    } else {
        try {
            if (objeto === "") { 
                message.channel.send("Selecciona una categoria. `syp.reddit (categoria)`.");
            } else {
            const { body } = await snekfetch
                .get(`https://www.reddit.com/r/${objeto}.json?sort=top&t=week`)
                .query({ limit: 3000 });
            const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
            if (!allowed.length) return message.channel.send('Reintentalo mas tarde.');
            const randomnumber = Math.floor(Math.random() * allowed.length)
            const embed = new Discord.RichEmbed()
            .setColor(0x00A2E8)
            .setTitle(allowed[randomnumber].data.title)
            .setDescription("Subido por : " + allowed[randomnumber].data.author)
            .setImage(allowed[randomnumber].data.url)
            .addField("Si no se ve usa la URL :", (allowed[randomnumber].data.url))
            .setFooter("Reddit")
            message.channel.send(embed)
        }
        } catch (err) {
            return console.log(err);
        } 
    }

}