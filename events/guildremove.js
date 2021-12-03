const client = require('../index');
const { MessageEmbed } = require('discord.js');
   
   const Canvas = require('canvas')
   const Discord = require('discord.js')
Canvas.registerFont('./font/upheavtt.ttf', { family: 'Upheaval TT (BRK)' });
var welcomeCanvas = {}
welcomeCanvas.create = Canvas.createCanvas(1024, 500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font = '50px "Upheaval TT (BRK)"';
welcomeCanvas.context.fillStyle = '#ffffff';

Canvas.loadImage('./img/bg.png').then(async (img) => {
   welcomeCanvas.context.drawImage(img, 0, 0, 1024, 500)
   welcomeCanvas.context.fillText("  THIS KID JUST LEFT", 360, 360)
   welcomeCanvas.context.textAlign = "center";
   welcomeCanvas.context.beginPath();
   welcomeCanvas.context.arc(512, 166, 128, 0, Math.PI * 2, true);
   welcomeCanvas.context.stroke()
   welcomeCanvas.context.fill()
})

client.on('guildMemberRemove', async member => {
 const welcomeChannel = client.channels.cache.get('914586631653191710') //center
 let canvas = welcomeCanvas;
 canvas.context.font = '50px "Upheaval TT (BRK)"';
 canvas.context.textAlign = "center";
 canvas.context.fillText('   ' + member.user.tag.toUpperCase(), 512, 410)
 canvas.context.font = '50px "Upheaval TT (BRK)"'; 
 canvas.context.fillText(` ${member.guild.memberCount}th left`, 512, 455)
 canvas.context.beginPath()
 canvas.context.arc(512, 166, 119, 0, Math.PI * 2, true)
 canvas.context.closePath()
 canvas.context.clip()
 await Canvas.loadImage(member.user.displayAvatarURL({ format: "png", size: 1024}))
 .then(img => {
   canvas.context.drawImage(img, 393, 47, 238, 238);
 })
 let atta = new Discord.MessageAttachment(canvas.create.toBuffer(), `welcome-${member.id}.png`)
 try {
   welcomeChannel.send({ content: `Say goodbye <a:rickroll:849279212125028363> ${member}, just lefft ${member.guild.name}!`, files: [atta]})
 } catch (error) {
   console.log(error)
 }
})