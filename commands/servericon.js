const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let avatar = message.guild.iconURL({
    dynamic: true,
    format: "png",
    size: 1024,
  });

  let embed = new Discord.MessageEmbed()
    .setColor(`#4cd8b2`)
    .setTitle(`Avatar do server ${message.guild.name}`)
    .setImage(avatar)
    .setFooter(
      `• Autor: ${message.author.tag}`,
      message.author.displayAvatarURL({ format: "png" })
    );
  await message.channel.send(`${message.author}`, embed);
};
