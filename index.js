const { REST } = require('@discordjs/rest');

const { Routes } = require('discord-api-types/v9');

const Discord = require('discord.js')


const token = "NzgwNDg1NTQyNDQ1MzE4MTU1.X7vxzg.9mN4Yi5Sw-zekNnhbAnJIlQbDvE";

const fs = require('fs');

const mongoose = require('mongoose')

const simplydjs = require('simply-djs')

const xp = require('simply-xp')
xp.connect('mongodb+srv://duckie:7bEhHcePAgPwEHx@discord-bot.xmh78.mongodb.net/Data')

const { Client, Collection, Intents } = require('discord.js');

const client = new Client({

  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS,],

  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const { mongooseConnectionString } = require('./config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));


const { GiveawaysManager } = require('discord-giveaways');
const { xpFor } = require('discord-xp');
client.giveaways = new GiveawaysManager(client, {
  storage: './giveaways.json',
  updateCountdownEvery: 5000,
  embedColor: '#ff0000',
  reaction: '🎉'
})
module.exports = client;

//----------------Load Events-----------\\

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {

  const event = require(`./events/${file}`);
  
  if (event.once) {

    client.once(event.name, (...args) => event.execute(...args, client));

  } else {

    client.on(event.name, (...args) => event.execute(...args, client));

  }

}

//------------------Load Slash Commands------------------\\

const commands = [];
console.log('hello!')

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commands = new Collection();
client.contextMenu = new Collection();

for (const file of commandFiles) { 

  const command = require(`./commands/${file}`);

  commands.push(command.data.toJSON());

  client.commands.set(command.data.name, command);

}
const contextMenuFiles = fs.readdirSync('./context-menu').filter(file => file.endsWith('.js'));
for (const file of contextMenuFiles ) { 

  const cmd = require(`./context-menu/${file}`);
  client.contextMenu.set(cmd.name, cmd)

  commands.push({
          name: cmd.name ?? null,
          type: cmd.type

});

}
console.log(commands)

//------------------Slash Commands Refresh------------------\\

const rest = new REST({ version: '9' }).setToken(token);

(async () => {

  try {

    console.log('Started refreshing application (/) commands.');

    await rest.put(

      

      Routes.applicationCommands("780485542445318155", "908682272520159242"), //908682272520159242
      { body: commands },
    );

    

    console.log('Successfully loaded application (/) commands.');

  } catch (error) {

    console.error(error);

  }

})();

//------------------Message Command Handler------------------\\

fs.readdir(`./mCommands/`, (error, files) => {

  client.mCommands = new Collection();

  client.aliases = new Collection();

  if (error) { return console.log("Error while trying to get the commmands."); };

  files.forEach(file => {

    const command = require(`./mCommands/${file}`);

    const commandName = file.split(".")[0];

    console.log(`Attempting to load command ${commandName}`);

    client.mCommands.set(commandName, command);

    if (command.aliases) {

      command.aliases.forEach(alias => {

        client.aliases.set(alias, command);

      });

    };

  });

});
//TEST 2

client.on('messageCreate', async (message) => {
  if (!message.guild) return
  if (message.author.bot) return

  const random = Math.floor(Math.random() * 29) + 1 // Min 1, Max 30
  xp.addXP(message, message.author.id, message.guild.id, random)

})


client.on('levelUp', async (message, data) => {

  const embed1 = new Discord.MessageEmbed()
  .setTitle('LEVEL UP')
  .setDescription(`<:levelup:914954865116069979> ${message.author} Has leveled up! GG he is now level **${data.level}** `)
  .setColor('GREEN')
  message.reply({ embeds: [embed1]})
}) //quick

  client.on('messageCreate', message => {
    if (message.content === '-rank') {
      let member = message.mentions.members.first()?.id || message.author.id

xp.rank(message, member, message.guild.id).then((img) => {
  message.reply({ files: [img] })
})
    }
  });
  client.on("messageCreate", async (message) => {
    if(message.content === '-leaderboard') {
      await xp.leaderboard(client, message.guild.id).then(board => {
        let lead = []
     
          board.forEach(user => {
            lead.push(`• ${user.tag} - XP: ${user.shortxp}`)
          })
     
     if(lead.length <= 1) {
         lead = 'No One is in the leaderboard'
     }
     
          message.reply({ content: ` ${lead.toString().replaceAll(',', '\n')} `})
  
    }
      )}
  })


client.on("interactionCreate", async interaction =>{
  simplydjs.clickBtn(interaction, {
    embedDesc: "Hello, Our staff will soon answer your questions! \n 10minutes of no messages will result in the ticket being deleted!",
    embedColor: "#075FFF", // default: #075FFF
    closeColor: "SUCCESS",
    closeEmoji: "🔒",
    credit: false,
    delColor: "DANGER",
    delEmoji: "❌", // default: ❌
    openColor: "Secondary",
    openEmoji: "🎫",
    timeout: true,
    cooldownMsg: "Whoa chill you already got an open ticket!",
    categoryID: "912423686064209961",
    role: "915123657972514826",
    ticketname: "ticket-{username}" // Custom Ticket name. {tag} | {id} | {username}
  });
})






client.login(token);  //premium
