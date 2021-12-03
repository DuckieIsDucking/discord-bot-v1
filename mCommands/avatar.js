const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageSelectMenu} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('user').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
    let target = interaction.mentions.members.first()
		if (target){
      const avatarEmbed = new MessageEmbed()
      .setTitle(`${target.user.tag}`)
      .setImage(`${target.user.displayAvatarURL()}`)

          
      return interaction.reply({ embeds: [avatarEmbed] });
    } 
  }
}