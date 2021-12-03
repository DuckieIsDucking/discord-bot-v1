const { MessageEmbed, Message, Permissions } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "ban",
    description: "ban command pog",
    async execute(message, args, client) {
        const nouser = new MessageEmbed()
        .setTitle(' An error has occurred! ')
        .setDescription('<:error:910976059938316319> You must send a user that you want to ban!')
        .setFooter('©️ Mawio')
        .setColor('#db3a34')
        let member = message.mentions.members.first()
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("no ban perms!1!!");
        const reason = args.slice(2).join(' ');
        const time = args.slice(1).join(' ')
        if(!member) {
            return message.channel.send({ embeds: [nouser]})
        }
        if(!time) {
            return message.channel.send("Please specify a time to ban the user")
        }
        if(!reason) {
            return message.channel.send("Please specify a reason!")
        }
        message.channel.send(`Banned ${member} for the time: ${time} reason: ${reason}`)
        await member.ban({ reason: reason })
        member.send(`You have been banned for the reason: ${time} reason: ${reason}`).catch(e => console.log('cant send messages'))


        setTimeout(async () => {
           await message.guild.members.unban(member)
           message.channel.send(`<@${member.user.id}> Has been unbanned after ${time} of unban!`) 
        }, ms(time));
    }
}