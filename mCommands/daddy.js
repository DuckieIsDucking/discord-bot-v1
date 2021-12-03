const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('daddy')
		.setDescription('get to know where your dad went! VERY EPIC'),

        async execute(message, args, client) {

                responses = ["Argntina", "He ran away", "You will understand when u grow up", "He went to buy milk", "He saw you.", "I DONT KNOW"]

                let response1 = Math.floor(Math.random() * responses.length);

                const eightballEmbed = new MessageEmbed()
                .setTitle('👨 DADDY.EXE ')
                .setColor('RANDOM')
                .addFields(
                    { name: 'ANSWER', value: (responses[response1]) }, 
                  )

                message.channel.send({ embeds: [eightballEmbed]})
            }

        }
    
    //
    