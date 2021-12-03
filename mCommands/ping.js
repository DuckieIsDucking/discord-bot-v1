const Discord = require('discord.js');

module.exports = {
    name: 'ping',

    async execute(message, args, client) {


        message.channel.send(`🏓 ${client.ws.ping} ms`)
    }
}