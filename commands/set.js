let serverconfig = require("./serverconfig.json");
var fs = require('fs');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("Lo siento, no tienes los permisos necesarios para hacer eso.");
  }
  
  let confg = args[0]
  let nomb = args.slice(1).join(' ');

  if (confg === "prefijo") {
    serverconfig[message.guild.id].prefix = nomb
    message.channel.send(`*Prefijo* cambiado a **${nomb}**`);
    message.guild.members.get(client.user.id).setNickname("Syrup [" + nomb + "]");
  } else if (confg === "mods") {   //Rol mods
    serverconfig[message.guild.id].mods = nomb
    message.channel.send(`Rol de *mods* cambiado a **${nomb}**`)
  } else if (confg === "verificacion") {   //Rol verificanión
    serverconfig[message.guild.id].verificacion = nomb
    message.channel.send(`Rol de *verificacion* cambiado a **${nomb}**`)
  } else if (confg === "anuncios") {   //Canal anuncios
    serverconfig[message.guild.id].anuncios = nomb
    message.channel.send(`Canal de *anuncios* cambiado a **${nomb}**`)
  } else if (confg === "sugerencias") {   //Canal sugerencias
    serverconfig[message.guild.id].sugerencias = nomb
    message.channel.send(`Canal de *sugerencias* cambiado a **${nomb}**`)
  } else if (confg === "lvl1") {   //lvl 1
    serverconfig[message.guild.id].lvl1 = nomb
    message.channel.send(`*lvl1* cambiado a **${nomb}**`)
  } else if (confg === "rollvl1") {   //rol lvl 1
    serverconfig[message.guild.id].rollvl1 = nomb
    message.channel.send(`*rollvl1* cambiado a **${nomb}**`)
  } else if (confg === "lvl2") {   //lvl 2
    serverconfig[message.guild.id].lvl2 = nomb
    message.channel.send(`*lvl2* cambiado a **${nomb}**`)
  } else if (confg === "rollvl2") {   //rol lvl 2
    serverconfig[message.guild.id].rollvl2 = nomb
    message.channel.send(`*rollvl2* cambiado a **${nomb}**`)
  } else if (confg === "lvl3") {   //lvl 3
    serverconfig[message.guild.id].lvl3 = nomb
    message.channel.send(`*lvl3* cambiado a **${nomb}**`)
  } else if (confg === "rollvl3") {   //rol lvl 3
    serverconfig[message.guild.id].rollvl3 = nomb
    message.channel.send(`*rollvl3* cambiado a **${nomb}**`)
  } else if (confg === "lvl4") {   //lvl 4
    serverconfig[message.guild.id].lvl4 = nomb
    message.channel.send(`*lvl4* cambiado a **${nomb}**`)
  } else if (confg === "rollvl4") {   //rol lvl 4
    serverconfig[message.guild.id].rollvl4 = nomb
    message.channel.send(`*rollvl4* cambiado a **${nomb}**`)
  } else if (confg === "banavisos") {   //Ban avisos
    serverconfig[message.guild.id].banavisos = nomb
    message.channel.send(`*banavisos* cambiado a **${nomb}**`)
  } else if (confg === "avisosban") {   //Avisos ban
    serverconfig[message.guild.id].avisosban = nomb
    message.channel.send(`*avisosban* cambiados a **${nomb}**`)
  } else if (confg === "comprar.ban") {   //Comprar ban
    serverconfig[message.guild.id].compban = nomb
    message.channel.send(`*comprar.ban* en tienda cambiado a **${nomb}**`)
  } else if (confg === "ban") {   //Rol ban 
    serverconfig[message.guild.id].poseedorban = nomb
    message.channel.send(`Rol *ban* cambiado a **${nomb}**`)
  } else {
    message.channel.send("**No se ha encontrado lo que quieres cambiar**. Selecciona **un apartado en *cursiva*** de la **configuración del server** (comando : " + "`" + serverconfig[message.guild.id].prefix + "config`). | EJ : `" + serverconfig[message.guild.id].prefix + "set prefijo div.` (cambia el prefijo a `div.`).")
  }

  fs.writeFile("./commands/serverconfig.json", JSON.stringify(serverconfig), (err) => {
    if(err) console.log(err)
  }); 
}