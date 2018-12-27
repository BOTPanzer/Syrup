
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");

const cheat = args.join(" ");

if (cheat === "") {
  message.channel.send("Selecciona un objeto.")
}if (cheat === "ban") {
  let commands = require(`./ban.js`);
  commands.run(client, message, args);
} else if (cheat === "nsfw") {   
  let commands = require(`./nsfw.js`);
  commands.run(client, message, args);
} else if (cheat === "isla") {
  let commands = require(`./isla.js`);
  commands.run(client, message, args);
} else if (cheat === "chest") {
  let commands = require(`./chest.js`);
  commands.run(client, message, args);
}
}