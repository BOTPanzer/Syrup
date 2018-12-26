const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

module.exports.run = async (bot, message, args) => {

    var UR_L = "http://csgo.tracker.network/profile/" + args[0];

    if (!args[0]) {
        return message.channel.send(":x: Por favor, pon una STEAMID64 o url custom valida");
    }

    request(UR_L, function(err, resp, body) {

        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if (KD == -1) {
            message.channel.send(":x: Invalido, ¡asegurate de que tu perfil tiene los detalles de juegos publicos y que has puesto una STEAMID64 o url custom valida!");
            return;
        }

        var WIN = getStatData(1, $);
        var HS = getStatData(4, $);
        var MONEY = getStatData(5, $);
        var SCORE = getStatData(6, $);
        var KILLS = getStatData(7, $);
        var DEATHS = getStatData(8, $);
        var MVP = getStatData(9, $);
        var BS = getStatData(13, $);
        var BD = getStatData(14, $);
        var HR = getStatData(15, $);

        var STAT = new Discord.RichEmbed()

            .setTitle("__***CSGO Stats***__")
            .setURL(UR_L)
            .setColor("0x#FF0000")
            .addField("Bajas/Muertes", KD, true)
            .addField("Partidas ganadas", `${WIN}%`, true)
            .addField("Rehenes salvados", HR, true)
            .addField("Dinero total", MONEY, true)
            .addField("Puntuación total", SCORE, true)
            .addField("Bajas", KILLS, true)
            .addField("Muertes", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Bombas plantadas", BS, true)
            .addField("Bombas desactivadas", BD, true)
            .addField("Tiracos al craneo loco", HS, true);


        message.channel.send(STAT);

    })
}

module.exports.help = {
    name: "csgo"
}