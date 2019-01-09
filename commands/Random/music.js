const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyCxA5Rndu_8zBOnEcyy0etVolYbIU0I2mc");
const queue = new Map();

module.exports.run = async (bot, message, args) => {

  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('Tienes que estar en un canal de voz para poner musica.');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('No puedo conectar al canal de voz. Estaria bien si te asegurases de que tengo los permisos necesarios.');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('No puedo conectar al canal de voz. Estaria bien si te asegurases de que tengo los permisos necesarios.');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅ Playlist : ¡**${playlist.title}** ha sido añadido a la cola!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
					message.channel.send(`
__**Selección de cancion :**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Elige el número de la canción.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						//console.error(err);
						return message.channel.send('No se ha proporcionado un numero valido. Cancelando selección de video.');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					//console.error(err);
					return message.channel.send('No he podido obtener resultados de busqueda.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "skip":
		if (!message.member.voiceChannel) return message.channel.send('No estas en un canal de voz.');
		if (!serverQueue) return message.channel.send('No hay nada puesto.');
		serverQueue.connection.dispatcher.end('El comando Skip ha sido usado.');
		return undefined;
        break;
      case "stop":
		if (!message.member.voiceChannel) return message.channel.send('No estas en un canal de voz.');
		if (!serverQueue) return message.channel.send('No hay nada puesto.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('El comando Stop ha sido usado.');
		return undefined;
break;
      case "volume":
		if (!message.member.voiceChannel) return message.channel.send('No estas en un canal de voz.');
		if (!serverQueue) return message.channel.send('No hay nada puesto.');
		if (!args[1]) return message.channel.send(`El volumen es **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`He puesto el volumen a **${args[1]}**`);
break;
      case "name":
		if (!serverQueue) return message.channel.send('No hay nada puesto.');
		return message.channel.send(`🎶 Ahora escuchando **${serverQueue.songs[0].title}**`);
break;
      case "list":
		if (!serverQueue) return message.channel.send('No hay nada puesto.');
		return message.channel.send(`
__**Lista de canciones :**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Ahora reproduciendo :** ${serverQueue.songs[0].title}
		`);
break;
      case "pause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ He pausado la musica.');
		}
		return message.channel.send('No hay nada puesto.');
break;
      case "resume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Musica reanudada.');
		}
		return message.channel.send('No hay nada puesto.');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = false) {
	var serverQueue = queue.get(message.guild.id);
	//console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			//console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`No he podido unirme al canal de voz | ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		//console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** ha sido añadida a la cola.`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	//console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('`Se ha acabado la playlist.`');
			//if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			//else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Empezar reproduciendo **${song.title}**`);
}
}