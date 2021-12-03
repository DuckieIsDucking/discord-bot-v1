const { MessageEmbed } = require('discord.js')
const { afk } = require('../Collection');
const client = require('../index');
const moment = require('moment')
client.on('messageCreate', async(message) => {
    if(!message.guild || message.author.bot) return;

    const mentionedMember = message.mentions.members.first()
    if(mentionedMember) {
        const data = afk.get(mentionedMember.id);

        if(data) {
            const [ timestamp, reason ] = data;
            const timeAgo = moment(timestamp).fromNow();
            let embedColors = ['ffadad','abc4ff', 'ecbcfd', 'ffcad4', '90dbf4', '1565c0', '78c6a3', ]; 
            const colors = embedColors[Math.floor(Math.random() * embedColors.length)];

            const embed = new MessageEmbed()
            .setTitle('AFK')
            .setDescription(`
            ${mentionedMember} Is currently afk. \n Please do not ping them!`
            )
            .addFields(
                { name: 'REASON', value: reason, inline: true },
                { name: 'TIME', value: timeAgo, inline: true },
              )
            .setColor(`#${colors}`)
            
            message.reply({ embeds: [embed]})
        }
    }

    const getData = afk.get(message.author.id);
    if(getData) {
        let embedColors = ['ffadad','abc4ff', 'ecbcfd', 'ffcad4', '90dbf4', '1565c0', '78c6a3', ]; 
        let colors = embedColors[Math.floor(Math.random() * embedColors.length)];
        
        afk.delete(message.author.id)
        const notAfk = new MessageEmbed()
        .setTitle('AFK')
        .setDescription(`${message.member} Is not afk anymore!`)
        .setFooter('Mawio.exe AFK command')
        .setColor(`#${colors}`)
        message.channel.send({ embeds: [notAfk]})
    }
})