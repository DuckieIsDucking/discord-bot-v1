const { MessageEmbed, Message, Permissions } = require('discord.js');
module.exports = {
  name: "blacklist",
  description: "blacc list pog?",
  async execute(message, args, client) {
    let target = message.mentions.members.first()
    let role = message.guild.roles.cache.find(r => r.id === "912408293547319396");
    
      if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) 
      return message.channel.send("You dont have perms bro")
      if(!target) 
          return message.channel.send("please mention a member!")


          if(message.guild.roles.cache.find(role => role.name === 'blacklist')) 
          return message.channel.send("This member is already blacklisted!")
           
          let doneEmbed = new MessageEmbed()
          .setTitle("DONE")
          .setDescription('Place holder')

          target.roles.add(role)
          message.channel.send({ embeds: [doneEmbed]})
          setTimeout(function(){ 
            message.delete()
         }, 5000);
          }

        }
    
  
