const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const m = await message.channel.send(`${message.author} É EU AMO NUTELAAA!!!!!!
`);
m.react("🍫")
};