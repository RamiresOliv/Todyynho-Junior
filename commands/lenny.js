const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const hmm = await message.channel.send("( ͡° ͜ʖ ͡°)");
  await hmm.react("741129088969998437");

  message.delete();
};