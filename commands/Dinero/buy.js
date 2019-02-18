const Discord = require("discord.js");
var money = require('discord-money');
let xp = require("../Xp/xp.json");
let serverconfig = require("../serverconfig.json");
let userdata = require("../user.json");
var fs = require('fs');
const ms = require("ms");

module.exports.run = async (client, message, args) => {

const objeto = args.join(" ");
const nomoney = ("No tienes suficiente dinero para hacer eso.");
let prfix = "`" + serverconfig[message.guild.id].prefix

  if (objeto === "") { 
    message.channel.send("Escoge un objeto.");
  }

  if(objeto === "XPx2") {
    money.fetchBal(message.author.id).then((i) => {
    if (i.money > 750) {
      let curmul = xp[message.author.id].xpmul;
      if(curmul === 512) {
        return message.channel.send("Te pasas men. No crees que **x512** es suficiente???")
      }
      money.updateBal(message.author.id, -750).then((i) => {
      message.guild.fetchMember(message.author)
      .then(member => {
       
        let tiempo = "1d"
        xp[message.author.id].xpmul = curmul * 2

        fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
        });

        let comprado = new Discord.RichEmbed()
        .setTitle(`¡**${message.author.username}** ha comprado XPx2!`)
        .setDescription(`Ahora tu xp subira el doble de rapido. | **XP : x${xp[message.author.id].xpmul}**`)
        .setColor('RANDOM')
        message.channel.send(comprado).then(msg => {msg.delete(7000)});

        setTimeout(function(){
          if(xp[message.author.id].xpmul === 2) {
            xp[message.author.id].xpmul = 1
          } else if(xp[message.author.id].xpmul === 4) {
            xp[message.author.id].xpmul = 2
          } else if(xp[message.author.id].xpmul === 8) {
            xp[message.author.id].xpmul = 4
          } else if(xp[message.author.id].xpmul === 16) {
            xp[message.author.id].xpmul = 8
          } else if(xp[message.author.id].xpmul === 32) {
            xp[message.author.id].xpmul = 16
          } else if(xp[message.author.id].xpmul === 64) {
            xp[message.author.id].xpmul = 32
          } else if(xp[message.author.id].xpmul === 128) {
            xp[message.author.id].xpmul = 64
          } else if(xp[message.author.id].xpmul === 256) {
            xp[message.author.id].xpmul = 128
          } else if(xp[message.author.id].xpmul === 512) {
            xp[message.author.id].xpmul = 256
          } else if(xp[message.author.id].xpmul < 1) {
            xp[message.author.id].xpmul = 1
          }

          fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
            if(err) console.log(err)
            });
        }, ms(tiempo));
      })
      })
    } else {
      message.channel.send(nomoney);
    }
    })
  }

  if(objeto === "1lvl") {
    money.fetchBal(message.author.id).then((i) => {
    if (i.money > 350) {
      money.updateBal(message.author.id, -350)
      let curlvl = xp[message.author.id].level;
      xp[message.author.id].level = curlvl + 1;
      fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {if(err) console.log(err)});
      let commands = require(`../Xp/mee6.js`);
      commands.run(client, message);
      money.updateBal(message.author.id, 10)
    } else {
      message.channel.send(nomoney);
    }
    })
  }

  if(objeto === "5lvls") {
    money.fetchBal(message.author.id).then((i) => {
    if (i.money > 1600) {
      money.updateBal(message.author.id, -1600)
      let curlvl = xp[message.author.id].level;
      xp[message.author.id].level = curlvl + 5;
      fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {if(err) console.log(err)});
      let commands = require(`../Xp/mee6.js`);
      commands.run(client, message);
      money.updateBal(message.author.id, 50)
    } else {
      message.channel.send(nomoney);
    }
    })
  }

  if(serverconfig[message.guild.id].compban === "1") {
    if(objeto === "ban") {
      money.fetchBal(message.author.id).then((i) => {
      if(i.money > 2400) {
        if(userdata[message.guild.id+"."+message.author.id].ban === 0) {
          money.updateBal(message.author.id, -2400)
          userdata[message.guild.id+"."+message.author.id].ban = 1
          fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
            if(err) console.log(err)
          });
          message.channel.send("**Ban** comprado correctamente. Ya **puedes usar** " + prfix + "ban <miembro> <razón opcional>` **1 vez**.\n(Solo puedes banear a gente con **menor o igual rol que tú**).");
        } else if(userdata[message.guild.id+"."+message.author.id].ban === 1) {
        message.channel.send("Ya tienes un **ban** en tu posesión, no vaciles.")
        }
      } else {
        message.channel.send(nomoney);
      }
      })
    }
  }

  if(objeto === "hotel") {
    money.fetchBal(message.author.id).then((i) => {
    if (i.money > 350) {
        message.guild.fetchMember(message.author)
        .then(member => {
          
          if(client.channels.get("533668911405727764").name === "habitación-1"){

            money.updateBal(message.author.id, -350)
            client.channels.get("533668911405727764").setName(`habitación-de-${message.author.username}`);
            let roole = message.guild.roles.find(`name`, "Habitacion 1");
            member.addRole(roole.id)
            setTimeout(function(){
              client.channels.get("533668911405727764").setName(`habitación-1`);
              member.removeRole(roole.id)
            }, ms("5d"));

          } else if(client.channels.get("533668935015333888").name === "habitación-2"){

            money.updateBal(message.author.id, -350)
            client.channels.get("533668935015333888").setName(`habitación-de-${message.author.username}`);
            let roole = message.guild.roles.find(`name`, "Habitacion 2");
            member.addRole(roole.id)
            setTimeout(function(){
              client.channels.get("533668935015333888").setName(`habitación-2`);
              member.removeRole(roole.id)
            }, ms("5d"));

          } else if(client.channels.get("533668956398157885").name === "habitación-3"){

            money.updateBal(message.author.id, -350)
            client.channels.get("533668956398157885").setName(`habitación-de-${message.author.username}`);
            let roole = message.guild.roles.find(`name`, "Habitacion 3");
            member.addRole(roole.id)
            setTimeout(function(){
              client.channels.get("533668956398157885").setName(`habitación-3`);
              member.removeRole(roole.id)
            }, ms("5d"));

          } else if(client.channels.get("533668977856086018").name === "habitación-4"){

            money.updateBal(message.author.id, -350)
            client.channels.get("533668977856086018").setName(`habitación-de-${message.author.username}`);
            let roole = message.guild.roles.find(`name`, "Habitacion 4");
            member.addRole(roole.id)
            setTimeout(function(){
              client.channels.get("533668977856086018").setName(`habitación-4`);
              member.removeRole(roole.id)
            }, ms("5d"));

          } else {
            message.channel.send("No hay habitaciones disponibles.")
          }

        })
    } else {
      message.channel.send(nomoney);
    }
    })
  }
}
