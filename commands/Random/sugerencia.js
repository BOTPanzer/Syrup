const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const sayMessage = args.join(" ");
  //message.delete().catch(O_o=>{}); 

  var generalChannel = client.channels.get("521400918038806548") // Replace with known channel ID
  generalChannel.send(`**${message.author.tag}** ha propuesto : **${sayMessage}**`) 
  .then(function (message) {
    message.react("❎")
    message.react("✅")
});
} 