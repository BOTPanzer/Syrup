var money = require('discord-money');

exports.run = (client, message, args) => {

var anuncios = client.channels.get("525783411961364484")

message.guild.fetchMember(message.author)
.then(member => {
  message.channel.send("Has abierto un cofre.");
  var numb = Math.floor(Math.random() * 100);
  if (numb < 11) {
    message.channel.send("No has ganado nada");
  } else if (numb < 21) {
    money.updateBal(message.author.id, 10 /* Value */).then((i) => {
    message.channel.send("Has ganado 10$");
    })
  } else if (numb < 36) {
    money.updateBal(message.author.id, 15 /* Value */).then((i) => {
    message.channel.send("Has ganado 15$");
    })
  } else if (numb < 37) {

    let role = member.guild.roles.find("name", "Poseedor de BAN");
    member.addRole(role).catch(console.error);
    message.channel.send("Has ganado **un BAN**");
    anuncios.send(`**${member.user.tag}** ha ganado un BAN en un cofre. ¡¡Mantened el orto cerrado porque no tendrá piedad!!`) 

  } else if (numb < 52) {
    money.updateBal(message.author.id, 20 /* Value */).then((i) => {
    message.channel.send("Has ganado 20$");
    })
  } else if (numb < 53) {
    let role = member.guild.roles.find("name", "NSFW leader");
    member.addRole(role).catch(console.error);
    message.channel.send("Has ganado **NSFW**");
    anuncios.send(`**${member.user.tag}** ha ganado NSFW. ¡¡Alejaos de los familiares porque no dudará en trollear!!`) 
  } else if (numb < 73) {
    money.updateBal(message.author.id, 25 /* Value */).then((i) => {
    message.channel.send("Has ganado 25$");
    })
  } else if (numb < 75) {

      var isla1 = client.channels.get("525791138284699650")
      var isla2 = client.channels.get("525791169385332756")
      var isla3 = client.channels.get("525791186661670928")
      var isla4 = client.channels.get("525793642548428824")

      if (isla1.name === "isla-1") {
        message.guild.fetchMember(message.author)
        .then(member => {
          let role = member.guild.roles.find("name", "Isla 1");
          member.addRole(role).catch(console.error);
          message.channel.send("Has ganado **una isla** en el cofre. Disfruta del vacio de tu isla.");
          isla1.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla2.name === "isla-2") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 2");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla** en el cofre. Disfruta del vacio de tu isla.");
        isla2.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla3.name === "isla-3") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 3");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla** en el cofre. Disfruta del vacio de tu isla.");
        isla3.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else if (isla4.name === "isla-4") {
      message.guild.fetchMember(message.author)
      .then(member => {
        let role = member.guild.roles.find("name", "Isla 4");
        member.addRole(role).catch(console.error);
        message.channel.send("Has ganado **una isla** en el cofre. Disfruta del vacio de tu isla.");
        isla4.setName(`Isla de ${member.user.tag}`)
        anuncios.send(`¡¡**${member.user.tag}** ha ganado una isla. ¡¡Ya no tendrá que escucharos!!`) 
        })
    } else {
      message.channel.send("Has ganado isla pero todas las islas estan compradas. :(");
    }
  } else if (numb < 85) {
    money.updateBal(message.author.id, 30 /* Value */).then((i) => {
    message.channel.send("Has ganado 30$");
    })
  } else if (numb < 95) {
    money.updateBal(message.author.id, 50 /* Value */).then((i) => {
    message.channel.send("Has ganado 50$");
    })
  } else if (numb < 100) {
    money.updateBal(message.author.id, 100 /* Value */).then((i) => {
    message.channel.send("Has ganado 100$");
    })
  } else if (numb < 101) {
    message.channel.send("Tu regalo está detras tullo");
  }
  })
}