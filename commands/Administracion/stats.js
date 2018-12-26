const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
    message.guild.fetchMember(message.author)
  .then(member => {
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    let bots = member.guild.members.filter(m => m.user.bot).size;
    message.channel.send(`**Usuarios totales** : ${member.guild.memberCount}\n**Personas** : ${humans}\n**Bots** : ${bots}`);
  });
}