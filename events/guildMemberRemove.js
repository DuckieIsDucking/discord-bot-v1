const client = require('../index');
const { MessageEmbed } = require('discord.js');

   client.on('guildMemberRemove', async (member) => {

       const byeChannel = client.channels.cache.get('913847426568306708');
       let embedColors = ['ffadad','abc4ff', 'ecbcfd', 'ffcad4', '90dbf4', '1565c0', '78c6a3', ]; 
       const colors = embedColors[Math.floor(Math.random() * embedColors.length)];
       let Embed = new MessageEmbed()
   .setTitle(':wave: __SAY GOODBYE__')
   .setDescription(`We lost **<@${member.user.id}>** what an idiot`)
   .addFields(
     { name: 'Member counter', value: `${member.guild.memberCount}th members left`, inline: true },
   )
     .setThumbnail(member.user.displayAvatarURL())
     .setColor(`#${colors}`)
       
         if(member.user.bot) return;
           else {
               byeChannel.send({ embeds: [Embed]}).catch(e => console.log(`
                ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ \n
                ┊                                       ┊ \n
                ┊  GUILD MEMBER REMOVE problem happend. ┊ \n 
                ┊                       \n              ┊ \n
                ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ \n
                `));
       }
    })

   