const { Command } = require("discord.js-commando");
const snekfetch = require("snekfetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const { body } = await snekfetch.get("https://random.dog/woof.json");

  message.channel.send(body.url);
};