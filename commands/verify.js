const Discord = require("discord.js");
const client = new Discord.Client();
let serverconfig = require("./serverconfig.json");

module.exports.run = async (client, message, args) => {

  let extmember = message.mentions.members.first();

  if(!extmember) {
    message.guild.fetchMember(message.author)
    .then(member => {
      let role = member.guild.roles.find("name", `${serverconfig[message.guild.id].verificacion}`);
      member.addRole(role).catch(console.error);
      member.send("¡¡Felicidades!!, ¡has verificado y ya puedes usar el servidor!")
      client.channels.find("name",`${serverconfig[message.guild.id].welcome}`).send(`${message.author}, bienvenido crack. https://cdn.discordapp.com/attachments/511332846787362818/511594562301722634/AFJTC.mp4`) 
    });
  } else {
    let role = extmember.guild.roles.find("name", `${serverconfig[message.guild.id].verificacion}`);
    extmember.addRole(role).catch(console.error);
    extmember.send("¡¡Felicidades!!, ¡has verificado y ya puedes usar el servidor!")
    client.channels.find("name",`${serverconfig[message.guild.id].welcome}`).send(`${extmember}, bienvenido crack. https://cdn.discordapp.com/attachments/511332846787362818/511594562301722634/AFJTC.mp4`) 
  }
}