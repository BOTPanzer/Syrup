let xp = require("./xp.json");
const { registerFont, createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(305, 75)
const ctx = canvas.getContext('2d')
const fondo = 'commands/Xp/rank/xpppp.jpg'
registerFont('commands/Xp/rank/Pixyy.ttf', { family: 'Pixyy' })
  
module.exports.run = async (bot, message) => {

let member = message.mentions.members.first();
if(!member) member = message.author

let curxp = xp[member.id].xp;
let curlvl = xp[member.id].level;
let curmul = xp[member.id].xpmul;
let nxtLvl = (curlvl * 300) + ((curlvl - (curlvl / 2)) * curlvl) * 50;

if(curlvl < 5) rango = "🎓"
if(curlvl >= 5) rango = "🏅"
if(curlvl >= 10) rango = "🥉"
if(curlvl >= 20) rango = "🥈"
if(curlvl >= 35) rango = "🥇"
if(curlvl >= 55) rango = "🏆"
if(curlvl >= 70) rango = "💍"
if(curlvl >= 85) rango = "💎"
if(curlvl >= 100) rango = "👑"

//Fondo
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

  // Write emoji
  ctx.font = '30px Pixyy'
  ctx.rotate(0)
  ctx.fillStyle = '#AAAAAA'
  ctx.fillText(`${rango}`, 260, 62)
  
  // Draw user avatar
  loadImage(member.avatarURL).then((image) => {
    ctx.translate(6, 6)
    ctx.drawImage(image, 0, 0, 63, 63)
    const buf2 = canvas.toBuffer('image/jpeg', { quality: 0.5 })
    message.channel.send({
      files: [ 
        buf2
      ]  
    })
  })
})
}