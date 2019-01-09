
exports.run = (client, message, args) => {
  let menor = args[0] * 1;
  if(!menor) return message.channel.send(`Selecciona el numero **menor**.`);
  let mayor = args[1] * 1;
  if(!mayor) return message.channel.send(`Selecciona el numero **mayor**.`);
  let rand = Math.floor(Math.random() * ((mayor + 1) - menor)) + menor
  message.channel.send(`Numero **${rand}**`);
  }