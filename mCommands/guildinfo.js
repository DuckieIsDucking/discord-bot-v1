const { MessageEmbed, Message, Permissions } = require('discord.js');
module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    description: "serverinfo yay",
        async execute(message, args, client) {

            const guild = client.guilds.cache.get('908682272520159242');
            const voiceCount = guild.channels.cache.filter(
            (channel) => "GUILD_VOICE"
            ).size;
            const textCount = guild.channels.cache.filter(
            (channel) => "GUILD_TEXT"
            ).size;
            const catCount = guild.channels.cache.filter(
            (channel) => "GUILD_CATEGORY"
            ).size;
            const rolesCount = guild.roles.cache
    let serverEmbed = new MessageEmbed()
    .setTitle(':computer: MAWIO.EXE WORKED!') 
    .addFields(
        { name: 'GUILD ID', value: `${guild.id}`, inline: true },
        { name: 'GUILD NAME', value: `${guild.name} guild's name`, inline: true },
        { name: 'GUILD OWNER', value: `idot`, inline: true },
        { name: 'GUILD ROLES', value: `${guild.roles.cache.size} roles`, inline: true },
        { name: 'GUILD CHANNELS', value: `${guild.channels.cache.size} channels`, inline: true },
        { name: 'GUILD TEXT', value: `${textCount} text channels`, inline: true },
        { name: 'GUILD CATEGORIES', value: `${catCount} categories`, inline: true },
        { name: 'GUILD VOICE CHANNELS', value: `${voiceCount} vcs`, inline: true },
      )
      .setColor('#01497c')
	  .setFooter('Totally real hacking has been done!')
      message.channel.send({ embeds: [serverEmbed]})
        }
    }