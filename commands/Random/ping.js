
exports.run = (client, message, args) => {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! Latencia es ${m.createdTimestamp - message.createdTimestamp}ms. Latencia de API es ${Math.round(client.ping)}ms`);
}