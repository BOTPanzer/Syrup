
exports.run = (client, message, args) => {
message.channel.send(`Resultado : **${Math.floor(Math.random() * 2) == 0 ? "cara" : "cruz"}**!`);
}