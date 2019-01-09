const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("No he podido encontrar a ese miembro.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("¡Men, especifica un rol!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("No he podido encontrar ese rol.");

  if(rMember.roles.has(gRole.id)) return message.reply("El miembro ya tiene ese rol.");
  await(rMember.addRole(gRole.id));

  try{
    await message.channel.send(`Felicidades, <@${rMember.id}> ha sido otorgado el rol **${gRole.name}**.`)
  }catch(e){
    console.log(e.stack);
  }
}