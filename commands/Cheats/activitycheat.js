function doMagic() {
  var rand = ['el nuevo video de Pewd', 'memes en reddit', 'bailes rusos', 'tutoriales de FdFlavia', 'el pack de Carbo', 'anime tiddies', 'a Ricardo bailando', '...  ¿Me perdonas?', 'a el calvo de Cepeda','como ella no te quiere','cosas cristianas','"Top 10 mejores batallas del anime"'];
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