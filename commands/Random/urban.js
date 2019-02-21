const fetch = require('snekfetch'),
  Discord = require('discord.js');

  exports.run = async (client, message, args) => {

  if (!args) return message.channel.send(`Por favor, especifica **algo** para buscar.`);

  fetch.get("https://api.urbandictionary.com/v0/define?term=" + args).then(res => {
    if(res.body.list[0] === undefined) {
      return message.channel.send("No se ha encontrado el termino men")
    }
    const definition = res.body.list[0].definition.split('[').join('***').split(']').join('***');
    const word = res.body.list[0].word;
    const gudword = word.replace(/ /g,"%20");
    const exam = res.body.list[0].example.split('[').join('***').split(']').join('***');
    const thump = res.body.list[0].thumbs_up;
    const thumbdown = res.body.list[0].thumbs_down;
    const embed = new Discord.RichEmbed()
    .setColor('#2257af')
    .setTitle(`**${word}**`)
    .setURL("https://www.urbandictionary.com/define.php?term=" + gudword)
    .setDescription(`**Definición :**\n${definition}\n\n**Ejemplo :**\n${exam}`)
    .setFooter(`👍 ${thump} | 👎 ${thumbdown}`)
  
    message.channel.send(embed)
  })
  
}