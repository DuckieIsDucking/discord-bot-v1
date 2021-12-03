module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`
		┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ \n
		┊                                       ┊ \n
		┊  			CLIENT IS READY! 			┊ \n 
		┊                       \n              ┊ \n
		┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉`);
		const activitys = [
			`-help for help!`,
			`${client.users.cache.size} users!`,
			`${client.channels.cache.size} channels!`,
			`${client.guilds.cache.size} servers!`,
		];
		client.user.setActivity(activitys[Math.floor(Math.random() * (activitys.length - 1) + 1)], {type: 'WATCHING'});
		setInterval(() => {
			//console.log('Updated status!')
			client.user.setActivity(activitys[Math.floor(Math.random() * (activitys.length - 1) + 1)], {type: 'WATCHING'});
		}, 10000);

		const guild = client.guilds.cache.get('908682272520159242');
		setInterval(() =>{
			//console.log('Updated member count')
			const memberCount = guild.memberCount;
			const botCount = guild.members.cache.filter(member => member.user.bot).size
			const justMember = memberCount - botCount;
			const channel = guild.channels.cache.get('909881056801472583');
			const channel1 = guild.channels.cache.get('910195993646104626');
			const channel2 = guild.channels.cache.get('910960711608467496')
			channel.setName(` 🌎ㅤ┋ Total users: ${memberCount.toLocaleString()}`).catch(e => console.log('Total problem'));
			channel1.setName(`🤖  ┋ Bots: ${botCount.toLocaleString()}`).catch(e => console.log('Bots problem'));
			channel2.setName(`👤  ┋ Members: ${justMember.toLocaleString()}`).catch(e => console.log('Member problem'));
		}, 10000);
	
	}
}