const { Client, Message, MessageEmbed} = require('discord.js')
const { MessageActionRow, MessageButton} = require('discord.js')
module.exports = {
    name: "verify",

    async execute(message, args, client) {
        console.log(message)
        const embed = new MessageEmbed()
        .setTitle('verify')
        .setDescription('Please verify by clicking the button + check your DMs')
        .setColor('GREEN')

    const row = new MessageActionRow() 
    .addComponents(
        new MessageButton()
        .setStyle("SUCCESS")
        .setCustomId('verify')
        .setLabel('verify here')
        .setEmoji('✅')
    )

    message.channel.send({ embeds: [embed]})
    }
}
