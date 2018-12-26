
exports.run = (client, message, args) => {

      var anuncios = client.channels.get("525783411961364484")
      var isla1 = client.channels.get("525791138284699650")
      var isla2 = client.channels.get("525791169385332756")
      var isla3 = client.channels.get("525791186661670928")
      var isla4 = client.channels.get("525793642548428824")

      if (isla1.name === "isla-1") {
        message.guild.fetchMember(message.author)
        .then(member => {
          let role = member.guild.roles.find("name", "Isla 1");
          member.addRole(role).catch(console.error);
          message.channel.send("Has ganado **una isla**. Disfruta del vacio de tu isla.");
          isla1.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla2.name === "isla-2") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 2");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla**. Disfruta del vacio de tu isla.");
        isla2.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla3.name === "isla-3") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 3");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla**. Disfruta del vacio de tu isla.");
        isla3.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla4.name === "isla-4") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 4");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla**. Disfruta del vacio de tu isla.");
        isla4.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else {
      message.channel.send("Has ganado isla pero todas las islas estan compradas. :(");
    }
}