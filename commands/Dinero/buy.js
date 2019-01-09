const Discord = require("discord.js");
var money = require('discord-money');
let xp = require("../Xp/xp.json");
let serverconfig = require("../serverconfig.json");
let userdata = require("../user.json");
var fs = require('fs');
const ms = require("ms");

exports.run = (client, message, args) => {

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
        .setTitle(`¡**${message.author.tag}** ha comprado XPx2!`)
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
      money.updateBal(message.author.id, -350).then((i) => {
      message.guild.fetchMember(message.author)
      .then(member => {
        
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtLvl = (curlvl * 300) + ((curlvl - (curlvl / 2)) * curlvl) * 50;
        xp[message.author.id].xp = nxtLvl;
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
          .setTitle(`¡**${message.author.tag}** ha subido de nivel!`)
          .setDescription(`Recompensa por subir al nivel **${curlvl + 1}** : **10$**`)
          .setColor('RANDOM')
        message.channel.send(lvlup).then(msg => {msg.delete(7000)});
        money.updateBal(message.author.id, 10)

        fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
        });
      })
      })
    } else {
      message.channel.send(nomoney);
    }
    })
  }

  if(objeto === "5lvls") {
    money.fetchBal(message.author.id).then((i) => {
    if (i.money > 1600) {
      money.updateBal(message.author.id, -350).then((i) => {
        message.guild.fetchMember(message.author)
        .then(member => {
          
          let curxp = xp[message.author.id].xp;
          let curlvl = xp[message.author.id].level;
          let lvl5mas = curlvl + 4
          let nxtLvl = (lvl5mas * 300) + ((lvl5mas - (lvl5mas / 2)) * lvl5mas) * 50;
          xp[message.author.id].xp = nxtLvl;
          xp[message.author.id].level = curlvl + 5;
          let lvlup = new Discord.RichEmbed()
            .setTitle(`¡**${message.author.tag}** ha subido de nivel!`)
            .setDescription(`Recompensa por subir al nivel **${curlvl + 5}** : **50$**`)
            .setColor('RANDOM')
          message.channel.send(lvlup).then(msg => {msg.delete(7000)});
          money.updateBal(message.author.id, 50)
  
          fs.writeFile("./commands/Xp/xp.json", JSON.stringify(xp), (err) => {
          if(err) console.log(err)
          });
        })
        })
    } else {
      message.channel.send(nomoney);
    }
    })
  }

  if(serverconfig[message.guild.id].compban === "1") {
    if(objeto === "ban") {
      money.fetchBal(message.author.id).then((i) => {
      if (i.money > 2400) {
        if (!userdata[message.guild.id+"|"+message.author.id].ban === 1) {
        money.updateBal(message.author.id, -2400).then((i) => {
        message.guild.fetchMember(message.author)
        .then(member => {
          userdata[message.guild.id+"|"+message.author.id].ban = 1
          fs.writeFile("./commands/user.json", JSON.stringify(userdata), (err) => {
            if(err) console.log(err)
          });
          message.channel.send("**Ban** comprado correctamente. Ya tienes permiso para **usar el comando** " + prfix + "ban <miembro> <razón opcional>` **1 vez**.\nSolo puedes banear a gente con **menor o igual rol que tú**.");
        })
      })
      } else {
        message.channel.send("Ya tienes un **Ban** en tu posesión, no vaciles.")
      }
      } else {
        message.channel.send(nomoney);
      }
      })
    }
  }

}
