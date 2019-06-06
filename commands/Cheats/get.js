
exports.run = (client, message, args) => {
  if(!message.member.id === "318384645274337280") return;

  if(!args[0]) {
    message.channel.send("Selecciona algo.")
  } else if(args[0] === "config") {
    message.channel.send(`serverconfig.json`, {
        files: [
          "./commands/serverconfig.json"
        ]
      })
  } else if(args[0] === "xp") {
    message.channel.send(`xp.json`, {
        files: [
          "./commands/Xp/xp.json"
        ]
      })
  } else if(args[0] === "user") {
    message.channel.send(`user.json`, {
      files: [
        "./commands/user.json"
      ]
    })
  } else if(args[0] === "bank") {
    message.channel.send(`bancoserver.json`, {
        files: [
          "./commands/bancoserver.json"
      ]
    })
  } else if(args[0] === "battle") {
    message.channel.send(`battle.json`, {
        files: [
          "./commands/DnD/battle.json"
      ]
    })
  } else if(args[0] === "all") {
    message.channel.send(`all`, {
        files: [
          "./commands/serverconfig.json",
          "./commands/Xp/xp.json",
          "./commands/user.json",
          "./commands/bancoserver.json",
          "./commands/DnD/battle.json"
      ]
    })
  }
}