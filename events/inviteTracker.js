const client = require('../index');

const { promisify } = require('util');

const wait = promisify(setTimeout);



let invites;

let id = '908682272520159242';

client.on('ready', async() => {
    await wait(2000);
    client.guilds.cache.get('908682272520159242').invites.fetch().then(inv => {
        invites = inv;
    })
})

client.on('guildMemberAdd', async(member) => {
    if(member.guild.id !== id) return;
    member.guild.invites.fetch().then(gInvites => {
        const invite = gInvites.find((inv) => invites.get(inv.code).uses < inv.uses);

        const channel = member.guild.channels.cache.get('915978404506001408');
        const inviter = await guild.fetchAuditLogs({ type: "BOT_ADD" }).entries.filter(u => u.target.id == client.user.id).first().executor

        channel.send(`${member} was invited by ${invite.inviter} and the code was ${inv.code}`)
    })
})

// const ultrax = require('ultrax')
// ultrax.inviteLogger(client) 

// client.on('inviteJoin', async(member, invite, inviter) => {
    
// const channel = client.channels.cache.get('915978404506001408')

// const message = `
// ≿━━━━༺❀༻━━━━≾ \n
// ➼ User: ${member}\n 
// ➼ Inviter: ${inviter.tag}\n 
// ➼ Invite uses: ${invite.uses}\n
// ➼ Code used: ${invite.code}\n
// ≿━━━━༺❀༻━━━━≾`
// channel.send(message)
// })