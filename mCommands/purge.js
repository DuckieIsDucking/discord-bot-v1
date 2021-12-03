const client = require('../index')
const { MessageEmbed, Message, Permissions } = require('discord.js');

module.exports = {
    name: 'purge',
    aliases: ["clear"],
    description: 'Purges messages',
    async execute(message, args, client) {
        let amount = args[0];
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("no message perms!1!!");

        // if there's no amount provided or the amount is not a number. it will return this message.
        if (isNaN(amount)) return message.channel.send('Please provide a valid number!')
        
        // if the amount is less than 1 then it will return this message.
        if (amount < 1) return message.channel.send('Please provide a number greater than 1')
        
        // if the amount is more than 99 it will set the amount to 99 
        if (amount > 100) amount = 99;

        try {
            // we're adding 1 here to delete the command message as well.
            await message.channel.bulkDelete(parseInt(amount) + 1, true).then(m => {
                // the bot will send a message after bulkdeleting and delete it after 3 seconds
                // It will only display the amount of messages that the bot has deleted.
                message.channel.send(`${parseInt(m.size) - 1} messages purged!`).then(m => {
                    m.delete({ timeout: 3000 }); // time in miliseconds
                })
            })
        } catch {
            // if it catches an error. It will send this message
            return message.channel.send('There was an error. Please try again!')
        }
    }
}
