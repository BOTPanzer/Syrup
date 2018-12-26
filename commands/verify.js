const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  message.guild.fetchMember(message.author)
  .then(member => {
    let role = member.guild.roles.find("name", "Normies");
    member.addRole(role).catch(console.error);
    await member.send("Felicidades!!, has verificado y ya puedes usar el servidor.")
  });
}