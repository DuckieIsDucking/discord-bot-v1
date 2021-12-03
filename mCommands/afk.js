const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require('../Collection');
module.exports = {
    name: 'afk',
    description: 'afk command with status!',

    async execute(message, args, client)  {
        const reason = args.join(" ") || 'No reason'

        afk.set(message.author.id, [ Date.now(), reason])
        let embedColors = ['ffadad','abc4ff', 'ecbcfd', 'ffcad4', '90dbf4', '1565c0', '78c6a3', ]; 
        let colors = embedColors[Math.floor(Math.random() * embedColors.length)];
        const afkEmbed = new MessageEmbed()
        .setTitle('AFK')
        .setDescription('You are now afk')
        .addFields(
            { name: 'REASON', value: reason, inline: true },
          )
        .setColor(`#${colors}`)
        message.reply({ embeds: [afkEmbed]})

    }
}