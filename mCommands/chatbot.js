const simplydjs = require('simply-djs');
const client = require('../index');

client.on('messageCreate', message => {
    simplydjs.chatbot(client, message, {
        chid: "914953448720580669",
        name: 'Mawio',
        developer: 'turtlez'
  });
})