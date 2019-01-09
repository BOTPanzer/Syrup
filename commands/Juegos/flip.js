
exports.run = (client, message, args) => {

  var numb = Math.floor(Math.random() * 101);

  if (numb <= 49) {
    message.channel.send("¡Ha salido **cara**!")
  } else if (numb <= 99) {
    message.channel.send("¡Ha salido **cruz**!")
  }  else if (numb = 100) {
    message.channel.send("¡Ha salido **canto**!")
  }
}