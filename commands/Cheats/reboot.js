exports.run = (bot, message, args) => {
if(!message.member.id === "318384645274337280") return;

if(args[0] === "local") {
message.channel.send(":gear: Shutting off.")  
bot.destroy()
} else {
message.channel.send(":gear: Reload in process.")  
bot.destroy()
bot.login(process.env.token)
message.channel.send(":gear: Reload has been done.")
}
}
