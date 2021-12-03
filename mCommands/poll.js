const { MessageEmbed, Message, Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    name: "polls",
    description: "sends polls",
        async execute(message, client, args) {
            // const channel = message.mentions.channels.first()
            // if(!channel) return interaction.reply({ content: `Please specify a channel!`})
            // const option1 = args.join(" ")
            // if(!option1) return interaction.reply({ contet: `Please specifiy option 1!`})
            // const option2 = args.join(" ")
            // if(!option2) return interaction.reply({ content: `Please specify option 2!`})

            // const pollEmbed = new MessageEmbed()
            // .setTitle('📊 POLLS')
            // .setDescription('A new poll has been created! React on :one: if you think the first option is better than the second! \n React React on :two: if you think the second option is better than the first!')
            // .addFields(
            //     { name: 'Option 1', value: `:one: ${option1}!`, inline: true },
            //     { name: 'Option 2', value: `:two: ${option2}!`, inline: true },
            //   )
              message.channel.send('HELLO!')
        }
    }