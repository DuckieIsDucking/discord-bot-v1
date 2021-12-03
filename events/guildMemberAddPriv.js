const client = require('../index');
const { MessageEmbed } = require('discord.js')
client.on('guildMemberAdd', async member => {
    let welcomeEmbedPrivate = new MessageEmbed()
.setTitle('__Hello and welcome__  👋')
.setDescription(`Hello ${member.id},  we are very excited that you joined our server!\n
we hope that you will enjoy your stay with us!\n
before starting to chat with everyone please check out these channels!\n
<:link:908979158913261568>ㅤㅤ ***Links***\n
<:rules:908976284196012064> ╍ ***[RULES CHANNEL](https://discord.gg/3WbHQwbZ)***\n
<:ann:908978470640554044> ╍ ***[ANNOUNCEMENTS CHANNEL](https://discord.gg/MGqVX5eb )***ㅤ\n
:blobtada: ╍ ***[GIVEAWAY CHANNEL](https://discord.gg/vWCDXwjb)***\n
<:ban:908981776662265856> ╍ ***[BAN APPEALS](https://discord.gg/qSy5CXpD)***\n
<:sus:908982711094501386> ╍ Permanent Server Invite: https://discord.gg/6wX5ZnUQSU`)

  .setImage('https://cdn.discordapp.com/attachments/889504274906771537/908954588311330826/9850-blue-welcome.gif')
  .setColor('#90dbf4')
    
      member.send({ embeds: [welcomeEmbedPrivate]}).catch(e => console.log('Private message problem happend.'));
})