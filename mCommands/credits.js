const { Client, Message, MessageEmbed} = require('discord.js')
const { MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: "select",
    description: "Sends a selection menu",
    async execute(message, args, client) {

        const creditEmbed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('This is the credits category!')
        .setDescription('This is a credit for our creators, testers, and more \n Without them the bot could have not be done! \n Please appreacite all of the people that are listed here!')

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('credits')
                    .setPlaceholder('Select here the credit type!')
                    .addOptions([
                        {
                            label: 'Main-creators',
                            description: 'Gives the owners mods and helpers',
                            value: 'mainCreator',
                            emoji: '🕵',
                        },
                        {
                            label: 'Testers',
                            description: 'Gives the testers of the bot',
                            value: 'testers',
                            emoji: '🐵',
                        },
                    ]),
            );

        await message.author.send({ components: [row1], embeds: [creditEmbed] });

    }
}