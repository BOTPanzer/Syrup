
exports.run = (client, message, args) => {
  if(!message.member.id === "318384645274337280") return;

  if(!args[0]) {
    message.channel.send("Selecciona algo.")
  } else if(args[0] === "serverconfig") {
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
  } else if(args[0] === "banco") {
    message.channel.send(`user.json`, {
        files: [
          "./commands/bancoserver.json"
      ]
    })
  }
}