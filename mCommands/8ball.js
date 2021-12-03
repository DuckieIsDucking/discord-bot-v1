const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('Get answers for all of your questions!')
		.addUserOption(option => option.setName('question').setDescription('Insert the question that you want to get answered here!')),
        async execute(message, args, client) {
            let question = args.join(' ')

            let noQuestionEmbed = new MessageEmbed()
            .setTitle("ERROR")
            .setColor('#f25c54')
            .setDescription('You must insert a question!')

            if(!question) {
                interaction.reply({ embeds: [noQuestionEmbed]})
            }   

            else {
                responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
                "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
                "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
                "Yes.", "Yes – definitely.", "You may rely on it."]

                let response1 = Math.floor(Math.random() * responses.length);

                const eightballEmbed = new MessageEmbed()
                .setTitle(':8ball: 8Ball ')
                .setColor('#72efdd')
                .addFields(
                    { name: 'QUESTION', value: question, inline: true },
                    { name: 'ANSWER', value: (responses[response1]) },
                  )

                message.reply({ embeds: [eightballEmbed]})
            }

        }
    }