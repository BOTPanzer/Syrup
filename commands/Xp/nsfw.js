
exports.run = (client, message, args) => {
  var anuncios = client.channels.get("525783411961364484")

  message.guild.fetchMember(message.author)
  .then(member => {
    let role = member.guild.roles.find("name", "NSFW leader");
    member.addRole(role).catch(console.error);
    message.channel.send("**NSFW** conseguido correctamente. Ya tienes permiso para usar comandos de Syrup NSFW en canales que no lo son.");
    anuncios.send(`**${member.user.tag}** ha ganado NSFW. ¡¡Alejaos de los familiares porque no dudará en trollear!!`) 
  })
}
