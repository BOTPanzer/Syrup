function doMagic() {
    var rand = ['el nuevo video de Pewd', 'memes en reddit', 'bailes rusos', 'tutoriales de FdFlavia', 'el pack de Carbo'];
    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = (client, message, args) => {

if(!message.member.id === "318384645274337280") return;

if(!args[0]) {
  client.user.setActivity( doMagic(), { type: "WATCHING"})
} else {
  let agenteFBI = args.join(' ');
  client.user.setActivity( `${agenteFBI}`, { type: "WATCHING"})
}

}