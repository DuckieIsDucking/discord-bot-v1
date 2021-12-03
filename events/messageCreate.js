const { Interaction } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    execute(message, client){
        const prefix = '-'
        
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        const premiumSchema = require('../models/premium');

        
        if(client.mCommands.get(command)){
          client.mCommands.get(command).execute(message, args, client)
        }
        else if(client.aliases.get(command)){
          client.aliases.get(command).execute(message, args, client);
        }
        async function premium() {
          if(command.premium && !(await premiumSchema.findOne({ User: message.author.id})))
          return message.reply('You need premium to use this command')
        }
  
    },
  };