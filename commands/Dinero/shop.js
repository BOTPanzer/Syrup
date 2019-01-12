const Discord = require("discord.js");
var money = require('discord-money');
let xp = require("../Xp/xp.json");
let serverconfig = require("../serverconfig.json");

module.exports.run = async (bot, message, args) => {
  money.fetchBal(message.author.id).then((i) => {
  let bicon = bot.user.displayAvatarURL;

  if(serverconfig[message.guild.id].compban === "1") {
    let buyban = "- ***ban*** : Compras el permiso de banear 1 vez.\n**(2400$)**\n" 
    let prfix = "`" + serverconfig[message.guild.id].prefix
    let botembed = new Discord.RichEmbed()
      .setThumbnail(bicon)
      .setTitle("🥞Tienda Syrup =")
      .setDescription("Comando para comprar : " + prfix + "buy <objeto>`")
      .addField("Banco | XPmulti :", `${i.money}$ | x${xp[message.author.id].xpmul}`)
      .addField("🎁Objetos =", "- ***XPx2*** : Te da el **doble de XP por 1 dia** al hablar **(Acumulable)**.\n**(750$)**\n- ***1lvl*** : Compras **1 lvl**.\n**(350$)**\n- ***5lvls*** : Compras **5 lvls**.\n**(1600$)**\n- ***hotel*** : Compras **una sala privada** para **hacer lo que quieras** por **5 dias**.\n**(350$)**\n" + buyban)
      .setColor('RANDOM');
  
    message.channel.send(botembed);
  } else { 
    let buyban = ""  
    let prfix = "`" + serverconfig[message.guild.id].prefix
    let botembed = new Discord.RichEmbed()
      .setThumbnail(bicon)
      .setTitle("🥞Tienda Syrup =")
      .setDescription("Comando para comprar : " + prfix + "buy <objeto>`")
      .addField("Banco | XPmulti :", `${i.money}$ | x${xp[message.author.id].xpmul}`)
      .addField("🎁Objetos =", "- ***XPx2*** : Te da el **doble de XP por 1 dia** al hablar **(Acumulable)**.\n**(750$)**\n- ***1lvl*** : Compras **1 lvl**.\n**(350$)**\n- ***5lvls*** : Compras **5 lvls**.\n**(1600$)**\n- ***hotel*** : Compras **una sala privada** para **hacer lo que quieras** por **5 dias**.\n**(350$)**\n" + buyban)
      .setColor('RANDOM');
  
    message.channel.send(botembed);
  }
  })
}