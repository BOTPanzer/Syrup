let xp = require("./xp.json");
const { registerFont, createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(245, 75)
const ctx = canvas.getContext('2d')
const fondo = 'commands/Xp/rank/xpppp.jpg'
registerFont('commands/Xp/rank/Pixyy.ttf', { family: 'Pixyy' })

module.exports.run = async (bot, message, args) => {

let member = message.mentions.members.first();
if(!member) member = message.author

let curxp = xp[member.id].xp;
let curlvl = xp[member.id].level;
let curmul = xp[member.id].xpmul;
let nxtLvl = Math.round(Math.sqrt((curlvl*curlvl)+(curlvl*curlvl*curlvl))*5+200);

// Fondo
loadImage(fondo).then((image) => {
  ctx.translate(0, 0)
  ctx.drawImage(image, 0, 0, 305, 75)
    
  // Write Xp
  ctx.font = '15px Pixyy'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`Xp: ${curxp}/${nxtLvl}`, 75, 21)

  // Write Lvl 
  ctx.font = '15px Pixyy'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`Lvl: ${curlvl}`, 75, 43)

  // Write XpMul
  ctx.font = '15px Pixyy'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`XpMul: x${curmul}`, 75, 65)
  
  // Draw user avatar
  loadImage(member.avatarURL).then((image) => {
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