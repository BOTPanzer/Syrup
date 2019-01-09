const Discord = require("discord.js");
let serverconfig = require("../serverconfig.json");

exports.run = (client, message, args) => {
  const sugerencia = args.join(" ");

  client.channels.find("name",`${serverconfig[message.guild.id].sugerencias}`).send(`**${message.author}** ha sugerido **${sugerencia}**`)
  .then(function (message) {
    message.react("❎")
    message.react("✅")
});
} 