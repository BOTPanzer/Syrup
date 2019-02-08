
module.exports.run = async (bot, message, args) => {
let num = args[0] * 1
let dice = Math.floor(Math.random() * num) + 1
message.channel.send(`🎲 **${dice}** 🎲`)
}