const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var list = ['1', '2', '3', '4', '5', '6']

  var rand = list[Math.floor(Math.random() * list.length)]
  message.channel.send(`rolei os dados e caiu! ` + rand + `!`)
}