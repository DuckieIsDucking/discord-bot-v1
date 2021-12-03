const { Client, Message, MessageEmbed} = require('discord.js')
const { MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: "select",
    description: "Sends a selection menu",
    async execute(message, args) {

      const embed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('Test Embed')

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Nothing selected')
                    .addOptions([
                        {
                            label: 'Fun commands',
                            description: 'Fun commands like memes, jokes, etc.',
                            value: 'first_option',
                            emoji: '😄',
                        },
                        {
                            label: 'Admin commands',
                            description: 'Admin commands like lock channel, and more',
                            value: 'second_option',
                            emoji: '👮',
                        },
                        {
                            label: '',
                        },
                    ]),
            );

        await message.author.send({ components: [row], embeds: [embed] });
    
    }
}