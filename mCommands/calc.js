const simplydjs = require('simply-djs')
module.exports = {
  name: "calc",
  aliases: ["calculator"],
  description: "very simple calculator!",
  async execute(message, args, client) {

    simplydjs.calculator(message, {
      embedColor: '#cccfff',
      embedFoot: ' Calculator by Mawio ',
      credit: false
      
    });
}
}
