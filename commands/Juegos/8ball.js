
exports.run = (client, message, args) => {
  function doMagic8BallVoodoo() {
    var rand = ['**si**🎱', '**no**🎱', '**tu que crees, ¡Claro!**🎱', '**tu que crees... ¡NO!**🎱', '**sip**🎱', '**nunca**🎱', '**puede**🎱', '**¿por que si quiera lo intentas?**🎱'];
    return rand[Math.floor(Math.random()*rand.length)];
  }
  message.channel.send('🎱Tu respuesta es : ' + doMagic8BallVoodoo());
}