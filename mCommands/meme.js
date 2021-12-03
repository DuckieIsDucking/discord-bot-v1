const Discord = require('discord.js');
const got = require('got');

module.exports = {
    name: 'meme',
    description: 'meme from reddit r/memes',
    
    async execute(message, args, client) {

        const subreddit = "r/memes"
        got(`https://www.reddit.com/${subreddit}/random/.json`)
            .then(response => {
                const [body] = JSON.parse(response.body);
                const [post] = body.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;

                const embed = new Discord.MessageEmbed()
                .setTitle(`${memeTitle}`)
                .setURL(`${memeUrl}`)
                .setColor('#6e6f85')
                .setImage(memeImage)
                .setFooter(`Source: ${subreddit}`);
                message.reply({ embeds: [embed]})
            })
    }
}