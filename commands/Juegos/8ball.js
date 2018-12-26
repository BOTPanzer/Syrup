
exports.run = (client, message, args) => {
    function doMagic8BallVoodoo() {
        var rand = ['si🎱', 'no🎱', '¿por que si quiera lo intentas?🎱', 'tu que crees... ¡NO!🎱', 'puede🎱', 'nunca🎱', 'sip🎱'];
        return rand[Math.floor(Math.random()*rand.length)];
      }
      message.channel.send('🎱Tu respuesta es : ' + doMagic8BallVoodoo());
}