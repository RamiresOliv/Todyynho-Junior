const Discord = require('discord.js') 
exports.run = async (client, message, args) => {const embed = new Discord.MessageEmbed() .setDescription("esse comando é SUPER compacto") .setImage('https://cdn.discordapp.com/attachments/727984820269088798/771100223254560788/unknown.png') .setColor('#ff0d00') .setFooter(`muito compacto!`) 
message.channel.send(`${message.author}`, embed)}