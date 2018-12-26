
exports.run = (client, message, args) => {
var anuncios = client.channels.get("525783411961364484")
  
message.guild.fetchMember(message.author)
.then(member => {
  let role = member.guild.roles.find("name", "Poseedor de BAN");
  member.addRole(role).catch(console.error);
  message.channel.send("**Ban** conseguido. Ya tienes permiso para usar el comando `syp.ban (miembro) (razón)` 1 vez.");
  anuncios.send(`**${member.user.tag}** ha conseguido un BAN. ¡¡Mantened el orto cerrado porque no tendrá piedad!!`) 
})
}