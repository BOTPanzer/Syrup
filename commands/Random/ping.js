
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send("**Ping?**");
  m.edit(`**¡Pong!** La latencia es de **${m.createdTimestamp - message.createdTimestamp}ms**. La latencia de API es de **${Math.round(client.ping)}ms**`);
}