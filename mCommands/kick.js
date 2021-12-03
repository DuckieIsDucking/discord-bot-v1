const { MessageEmbed, Message, Permissions } = require('discord.js');
module.exports = {
    name: "kick",
    description: "kick command pog",
    async execute(message, args, client) {

        //}
        //}
        const nouser = new MessageEmbed()
        .setTitle(' An error has occurred! ')
        .setDescription('<:error:910976059938316319> You must send a user that you want to kick!')
        .setFooter('©️ Mawio')
        .setColor('#db3a34')
        let member = message.mentions.members.first()
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("no kick perms!1!!");
        const reason = args.slice(1).join(' ');
        if(!member) {
            return message.channel.send({ embeds: [nouser]})
        }
        if(!reason) {
            return message.channel.send("Please specify a reason!")
        }
        member.send(`You have been kicked for the reason: ${reason}`).catch(e => console.log(`
            ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ \n
            ┊                                       ┊ \n
            ┊  GUILD MEMBER REMOVE problem happend. ┊ \n 
            ┊                       \n              ┊ \n
            ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉`))
        message.channel.send(`Kicked ${member} for the reason: ${reason}`)
        member.kick(reason);


    }
}