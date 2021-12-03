const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('1-6 random generator'),

        async execute(message, args, client) {
             
                responses = ["1", "2", "3", "4", '5', '6']

                let response1 = Math.floor(Math.random() * responses.length);

                const eightballEmbed = new MessageEmbed()
                .setTitle(':game_die:  DICE ')
                .setColor('#f8edeb')
                .addFields(
                    { name: 'DICE GENERATOR', value: (responses[response1]) },
                  )

                message.channel.send({ embeds: [eightballEmbed]})
            }

        }
    