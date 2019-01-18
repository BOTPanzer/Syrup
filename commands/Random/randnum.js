
exports.run = (client, message, args) => {
  let men = args[0];
  let menor = men * 1
  if(men === "0") menor = 0
  if(!men) return message.channel.send(`Selecciona el numero **menor**.`);

  let may = args[1];
  let mayor = may * 1
  if(may === "0") mayor = 0
  if(!may) return message.channel.send(`Selecciona el numero **mayor**.`);
  
  let rand = Math.floor(Math.random() * ((mayor + 1) - menor)) + menor
  message.channel.send(`Numero **${rand}**`);
  }