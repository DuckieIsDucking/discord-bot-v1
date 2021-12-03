const Discord = require('discord.js')
const simplydjs = require('simply-djs')
module.exports = {
    name: 'rr',
    async execute(message, args, client) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Anything You Like")
      .setDescription("Hello World. Select your roles")
      .setFooter("You can change this embed style")

simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: "914813848048001024",
        label: "Role name", // default: *role name*
        color: "DANGER", // default: SECONDARY
        emoji: "🧁"
      } // etc..
    ]
  })
    }
}
