const Discord = require("discord.js");
var money = require('discord-money');

exports.run = async (bot, message, args, color, prefix) => {

  var choice = args[0];
  const nomoney = ("No tienes suficiente dinero para hacer eso.");

  money.fetchBal(message.author.id).then((i) => {
  if (i.money > 2) {

    var numb = Math.floor(Math.random() * 100);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb > 66) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijera";
    }

    if (choice == "papel" || choice == "pa") {  //papel
      if (choice2 == "tijera") {
        var response = `¡Escojo **Tijera**! :v: **¡He ganado!**`
        var response2 = `**Has perdido 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, -2)
      } else if (choice2 == "papel") {
        var response = `¡Escojo **Papel**! :hand_splayed: **¡Empate!**`
        var response2 = `**Banco :** ${i.money}$`
      } else if (choice2 == "piedra") { 
        var response = `¡Escojo **Piedra**! :punch: **¡Has ganado!**`
        var response2 = `**Has ganado 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, 2)
      }
    } else if (choice == "piedra" || choice == "pi") {  //piedra
      if (choice2 == "tijera") {
        var response = `¡Escojo **Tijera**! :v: **¡Has ganado!**`
        var response2 = `**Has ganado 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, 2)
      } else if (choice2 == "papel") {
        var response = `¡Escojo **Papel**! :hand_splayed: **¡He ganado!**`
        var response2 = `**Has perdido 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, -2)
      } else if (choice2 == "piedra") { 
        var response = `¡Escojo **Piedra**! :punch: **¡Empate!**`
        var response2 = `**Banco :** ${i.money}$`
      }
    } else if (choice == "tijera" || choice == "t") {  //tijera
      if (choice2 == "tijera") {
        var response = `¡Escojo **Tijera**! :v: **¡Empate!**`
        var response2 = `**Banco :** ${i.money}$`
      } else if (choice2 == "papel") {
        var response = `¡Escojo **Papel**! :hand_splayed: **¡Has ganado!**`
        var response2 = `**Has ganado 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, 2)
      } else if (choice2 == "piedra") { 
        var response = `¡Escojo **Piedra**! :punch: **¡He ganado!**`
        var response2 = `**Has perdido 2$!**\n**Banco :** ${i.money}$`
        money.updateBal(message.author.id, -2)
      }
    }
    let embed = new Discord.RichEmbed()
      .setTitle(response)
      .setDescription(response2)
      .setColor('RANDOM');
    message.channel.send(embed); 
  } else {
    message.channel.send(nomoney);
  } 
  })
}
