const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let killed = message.mentions.members.first();
  if (!killed) {
    let emb = new Discord.MessageEmbed()
      .setColor("#00f00")
      .setDescription(`${message.author} decidiu se matar 💔 DESCANSE EM PAZ`);

    message.channel.send(emb);
  } else {
    let emb = new Discord.MessageEmbed()
      .setColor("#00f00")
      .setDescription(
        `${killed} foi morto por ${message.author} 💔 DESCANSE EM PAZ`
      );

    message.channel.send(emb);
  }
};
