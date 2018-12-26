const Discord = require("discord.js");
var money = require('discord-money');

exports.run = async (bot, message, args, color, prefix) => {

  var choice = args[0];
  const nomoney = ("No tienes suficiente dinero para hacer eso.");
  
  money.fetchBal(message.author.id).then((i) => {
  if (i.money > 2) {
    if (choice == "papel" || choice == "pa") {
      var numb = Math.floor(Math.random() * 100);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb > 66) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijera";
    }
    if (choice2 == "tijera") {
      var response = "Escojo **Tijera**! :v: ¡He ganado!"
      money.updateBal(message.author.id, -2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.channel.send(`**Has perdido 2$!**\n**Banco :** ${i.money}$`);
    })   
    } else if (choice2 == "papel") {
        var response = "Escojo **Papel**! :hand_splayed: ¡Empate!"
    } else {  
        var response = "Escojo **Piedra**! :punch: ¡Has ganado!"
        money.updateBal(message.author.id, 2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
        message.channel.send(`**Has ganado 2$!**\n**Banco :** ${i.money}$`);
      })
      }
    message.channel.send(response);
    } else if (choice == "piedra" || choice == "pi") {
      var numb = Math.floor(Math.random() * 100);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb > 66) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijera";
    }
    if (choice2 == "papel") {
      var response = "Escojo **Papel**! :hand_splayed: ¡He ganado!"
      money.updateBal(message.author.id, -2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.channel.send(`**Has perdido 2$!**\n**Banco :** ${i.money}$`);
      })
    } else if (choice2 == "piedra") {
      var response = "Escojo **Piedra**! :punch: ¡Empate!"
    } else {
      var response = "Escojo **Tijera**! :v: ¡Has ganado!"
      money.updateBal(message.author.id, 2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.channel.send(`**Has ganado 2$!**\n**Banco :** ${i.money}$`);
      })
    }
    message.channel.send(response);
  } else if (choice == "tijera" || choice == "t") {
      var numb = Math.floor(Math.random() * 100);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb > 66) {
      var choice2 = "piedra";
    } else {
      var choice2 = "tijera";
    }
    if (choice2 == "piedra") {
      var response = "Escojo **Papel**! :hand_splayed: ¡Has ganado!"
      money.updateBal(message.author.id, 2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.channel.send(`**Has ganado 2$!**\n**Banco :** ${i.money}$`);
    })
    } else if (choice2 == "tijera") {
      var response = "Escojo **Tijera**! :v: ¡Empate!"
    } else {
      var response = "Escojo **Piedra**! :punch: ¡He ganado!"
      money.updateBal(message.author.id, -2 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
      message.channel.send(`**Has perdido 2$!**\n**Banco :** ${i.money}$`);
    })
    }
    message.channel.send(response);
  } else {
    message.channel.send("necesitas usar `syp.ppt [piedra|papel|tijera]`");
  }
  } else {
    message.channel.send(nomoney);
  } 
  })
}
