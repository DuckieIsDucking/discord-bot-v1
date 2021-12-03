
// const { MessageEmbed, Message } = require('discord.js');
// const { channels } = require('..');

// module.exports = {
//     name: "suggest",
//     description: "suggestions",
//         async execute(message, args, member) {
//             if(!message.channel.id === '911213783047864340') return message.channel.send('Wrong channel dude')
//             const sugChannel = message.guild.channels.cache.get('911213807404208169')
//             let suggestion = args.join(' ')
//             let noSuggestionEmbed = new MessageEmbed()
//             .setTitle("ERROR")
//             .setColor('#f25c54')
//             .setDescription('<:error:910976059938316319> You must insert a suggestion!')

//             if(!suggestion) {
//                 return message.channel.send({ embeds: [noSuggestionEmbed]})
//             }   
//             else {



//                 const suggestionEmbed = new MessageEmbed()
//                 .setTitle('<:check:911216700291158027> New suggestion! ')
//                 .setColor('#c1fba4')
//                 .addFields(
//                     { name: 'SUGGESTION', value: suggestion, inline: true },
//                     { name: 'SUGGESTER', value: `Suggester: **${message.member.user.tag}**` },
                    
//                   )
//                 .setThumbnail(message.member.user.displayAvatarURL())
//                 .setTimestamp()
//                 sugChannel.send({ embeds: [suggestionEmbed]})
                
//             }
//         }
//         }
    
    