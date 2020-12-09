const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`**Tempo da ultima hospedagem** 🕰️`)
    .setThumbnail("https://i.pinimg.com/originals/a9/0f/e4/a90fe4d4c03cf05d4bbd3c8fd65084a5.gif")
    .setColor('#ff0d00')
    .setTimestamp()
    .setDescription(`**Estou online há:**\n${uptime}`)

  message.channel.send(`${message.author}`, embed);
};