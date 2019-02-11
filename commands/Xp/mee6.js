let xp = require("./xp.json");
const { registerFont, createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(193, 75)
const ctx = canvas.getContext('2d')
const fondo = 'commands/Xp/rank/back.jpg'
registerFont('commands/Xp/rank/Serpentire.ttf', { family: 'Serpentire' })
  
module.exports.run = async (bot, message) => {

let curlvl = xp[message.author.id].level;

//Fondo
loadImage(fondo).then((image) => {
  ctx.translate(0, 0)
  ctx.drawImage(image, 0, 0, 193, 75)
    
  // Write "Level up!"
  ctx.font = '22px Serpentire'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`Level up!`, 75, 25)

  // Write lvl 
  ctx.font = '40px Serpentire'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`${curlvl}`, 113, 60)
  
  // Draw user avatar
  loadImage(message.author.avatarURL).then((image) => {
    ctx.translate(6, 6)
    ctx.drawImage(image, 0, 0, 63, 63)
    ctx.translate(-6, -6)
    const buf2 = canvas.toBuffer('image/png', { compressionLevel: 3, filters: canvas.PNG_FILTER_NONE })
    message.channel.send({
      files: [ 
        buf2
      ]  
    })
  })
})
}