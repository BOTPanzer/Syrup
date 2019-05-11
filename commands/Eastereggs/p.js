const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  var member= message.mentions.members.first();
  message.channel.send(member.avatarURL);
}