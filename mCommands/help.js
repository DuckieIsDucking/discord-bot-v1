const { Client, Message, MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx');
module.exports = {
    name: 'help',
    async execute(message, args, client) {
        const embed1 = new MessageEmbed()
        .setTitle('HELP COMMAND')
        .setDescription(`
        Hey there! :wave:, We are happy that you want to use our bot's command \n
         By clicking the buttons below you will be able to see the command \n
        There are 3 different categories \`Fun\`, \`Economy\` & \`Moderition\` \n
        `)
        const embed2 = new MessageEmbed()
        .setTitle('💰 ECONOMY')
        .setDescription('These are the economy commands **Please use them in <#915619415347843072>!**')
        .addFields(
            { name: 'add-money', value: 'Aliases: `addbal` (Admin only) \n Usage: `-addmoney @user <amount>`', inline: true },
            { name: 'buy', value: 'Aliases: none \n Usage: `-buy <item>`', inline: true },
            { name: 'inventory', value: 'Aliases: `inv` \n Usage: `-inv`', inline: true },
            { name: 'setmoney', value: 'Aliases: `setbal` \n Usage: `-setbal @user <amount>`', inline: true },
            { name: 'weekly', value: 'Some value here', inline: true },
            { name: 'bal', value: 'Aliases: `money, credits, balance` \n Usage: `-bal`', inline: true },
            { name: 'daily', value: 'Aliases none \n Usage: `daily`', inline: true },
            { name: 'lb', value: 'Alises: `leaderboard` \n Usage: `-lb`', inline: true },
            { name: 'rob', value: 'Aliases: none \n Usage: `-rob <user>`', inline: true },
            { name: 'shop', value: 'Aliases: none \n Usage: `shop`', inline: true },
            { name: 'work', value: 'Aliases: none \n Usage: `-work`', inline: true },
            { name: 'beg', value: 'Aliases: none \n Usage: `-beg`', inline: true },
            { name: 'search', value: 'Aliases: none \n Usage: `-search`', inline: true },
            { name: 'transfer', value: 'Aliases: `give, share` \n Usage `-transfer @user <amount>`', inline: true },
        )
        .setTimestamp()
        const embed3 = new MessageEmbed()
        .setTitle('🎢 FUN COMMANDS')
        .setFields(
            { name: 'DICE', value: "``-dice`` - Gives you a random number between 1-6", inline: true },
            { name: '8BALL', value: "``-8ball question`` - Answers you VERY ACCURATLY a YES / NO question!", inline: true },
            { name: 'HACK', value: "``-hack @user`` - Hacks a user NOTE: very accurate", inline: true },
            { name: 'DADDY', value: "``-daddy`` - Tells you where your dad went.", inline: true },
            { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
            { name: 'CALC', value: "``-calc`` - Basic calculator", inline: true },
            { name: 'AVATAR', value: "``-avatar`` - Sends someone's avavtar or your own", inline: true },
            { name: 'PP', value: "``-pp`` - you sussy baka", inline: true },
            { name: 'TTT', value: "``-ttt @user`` - A tictactoe command", inline: true },
            { name: 'CHATBOT', value: "``no command`` - <#914953448720580669> chat bot (super dumb)", inline: true },
          )
        .setTimestamp()

        const embeds = [embed1, embed2, embed3]
        pagination ({
            embeds: embeds,
            channel: message.channel,
            author: message.author,
            cooldown: 5000,
        })
    }
}