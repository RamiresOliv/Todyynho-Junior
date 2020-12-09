const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
var list = [`727.836.7374`, `736.837.8364.887`, `999.625.8288.938.938`, `9999.8374.8374.9284.029.938`,
  `8374.837.999.8474.9374.9374.938.028`, `932.939.716.928.573`, `5093.540.538.459.347.534.573.498.573`];
var rand = list[Math.floor(Math.random() * list.length)];
const m = await message.channel.send(`VENDO OS COOKS!`)
m.edit(`EI OLHA COOKES FORAM DOADOS AGR MESMO ${rand} COOKES!!!`);
};