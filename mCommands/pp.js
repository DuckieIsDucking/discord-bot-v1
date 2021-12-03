const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require("discord.js");

let pp = ['8=D',
'8==D',
'8===D',
'8====D',
'8=====D',
'8======D',
'8=======D',
'8========D',
'8=========D',
'8==========D',
'8===========D',
'8============D',
'8=============D',
'8==============D',
'8===============D',
];

let embedColors = ['ffadad','abc4ff', 'ecbcfd', 'ffcad4', '90dbf4', '1565c0', '78c6a3', ]; 

module.exports = { 
    name: 'pp',

        async execute(message, args) {

			const nouser = new MessageEmbed()
			.setTitle(' An error has occurred! ')
			.setDescription('<:error:910976059938316319> You must send a user that you want to pp!')
			.setFooter('©️ Mawio')
			.setColor('#db3a34')
			let target = message.mentions.members.first()
			if(!target)
			return message.channel.send({ embeds: [nouser]})

 const pps = pp[Math.floor(Math.random() * pp.length)];

const colors = embedColors[Math.floor(Math.random() * embedColors.length)];



    let ppEmbed = new MessageEmbed()
    .setTitle('<:sus:908982711094501386> PP-FINDER.EXE WORKED')
    .setDescription(`${target.user.username}'s PP `)
    .addFields(
        { name: 'PP:', value: `${pps}`, inline: true },
      )
      .setColor("#" + colors)
      message.channel.send({ embeds: [ppEmbed]})

        }
      }
