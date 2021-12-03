const { MessageEmbed, Message, MessageAttachment } = require('discord.js');
const client = require("..");
const dice = require('../mCommands/dice');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {

    if (interaction.isCommand()){

    if (!interaction.client.commands.has(interaction.commandName)) return;

    try {
        await interaction.client.commands.get(interaction.commandName).execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    };
    }

    
    
    if(interaction.isButton()){
      if(interaction.customId === "verify"){
        const { Captcha } = require('captcha-canvas');
        const captcha = new Captcha(); //create a captcha canvas of 100x300.
        captcha.async = false; //Sync
        captcha.addDecoy(); //Add decoy text on captcha canvas.
        captcha.drawTrace(); //draw trace lines on captcha canvas.
        captcha.drawCaptcha();

        const attachment = new MessageAttachment(captcha.png, "captcha.png")

        interaction.reply({content: `<@${interaction.user.id}>, Please answer the captcha! (You have 15s)`, files: [attachment]})
        const filter = m => m.author.id === interaction.user.id;
        const collector = interaction.channel.createMessageCollector({ filter, time: 15000})

        collector.on("collect", async m => { 
          setTimeout(() => {
            m.delete()
          }, 1000);
          if(!m.content.startsWith(captcha.text)){
            collector.stop()
            m.channel.send("Incorrect captcha").then(xd =>{
              setTimeout(() => {
                xd.delete()
                m.member.kick()
              }, 3000)
            })
          } 
          else 
          
          await m.member.roles.add('912770229841580133')
          m.channel.send(`good boi`).then(v =>{
            setTimeout(() => {
              v.delete()
            }, 3000)
          })
          collector.stop()
        })
      }
    }
    
    const funCommands = new MessageEmbed()
    .setTitle('😄 FUN COMMANDS')
    .setDescription('Our fun commands are pretty much useless but are very fun! \n But you should still check them \n **NOTE:** THE COMMANDS ONLY WORK IN BOT COMMANDS CHANNEL! ')
    .setFields(
      { name: 'DICE', value: "``-dice`` - Gives you a random number between 1-6", inline: true },
      { name: '8BALL', value: "``-8ball question`` - Answers you VERY ACCURATLY a YES / NO question!", inline: true },
      { name: 'HACK', value: "``-hack @user`` - Hacks a user NOTE: very accurate", inline: true },
      { name: 'DADDY', value: "``-daddy`` - Tells you where your dad went.", inline: true },
      { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
      { name: 'CALC', value: "``-calc`` - Basic calculator", inline: true },
      { name: 'AVATAR', value: "``-avatar`` - Sends someone's avavtar or your own", inline: true },
      { name: 'PP', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
      { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
      { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
      { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },
      { name: 'MEME', value: "``-meme`` - Gives you a random meme from reddit.", inline: true },

    )
    .setColor('BLURPLE')
    if (interaction.isSelectMenu()){
      console.log(interaction)
      if (interaction.customId === 'select') {
        if(interaction.values[0] === 'second_option'){
          return interaction.reply("You chose the second option");
          await interaction.deferUpdate();
        }
        else if(interaction.values[0] === 'first_option'){
          return interaction.reply({ embeds: [funCommands]})
          await interaction.deferUpdate();
        } 
      }
        if (interaction.isSelectMenu()){
          console.log(interaction)
          if (interaction.customId === 'credits') {
         if(interaction.values[0] === 'mainCreator'){
          return interaction.reply("Our main creators are: ...")
          await interaction.deferUpdate();
        }
        else if(interaction.values[0] === 'testers'){
          return interaction.reply("Our testers are: ...")
          await interaction.deferUpdate();
        }

    }
    }
    }
      

 if(interaction.isCommand()) {
      const command1 = client.commands.get(interaction.commandName)

      if(!command1) return interaction.reply({content: 'ERROR'})

      command1.execute(interaction, client);
    }
if(interaction.isContextMenu()) {
      const contextMenu = client.contextMenu.get(interaction.commandName)

      if(!contextMenu) return interaction.reply({content: 'ERROR'})

      contextMenu.execute(interaction, client);
    }

  

  
    },
};
