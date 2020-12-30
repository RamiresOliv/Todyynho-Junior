const Discord = require("discord.js");
const config_user = require("../config/user.json");

module.exports.run = async (bot, message, args) => {
  let ratus = message.mentions.members.first();

  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.rate (@membro)\` `);

  if (!ratus) return message.channel.send(embed2);

  let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let result = Math.floor(Math.random() * rates.length);
  if (message.content.includes("me")) {
    message.channel.send(
      `**__${message.author.username}__**, Eu te daria ${result}/10 <:blz:725142145526399141>`
    );
  } else if (ratus.user.id === message.author.id) {
    return message.channel.send(
      `**__${message.author.username}__**, Eu te daria ${result}/10 <:blz:725142145526399141>`
    );
  } else if (ratus.id === config_user.botid) {
    return message.channel.send(
      `**__${message.author.username}__**, Eu daria para min mesmo 99999999999/10 <:blz:725142145526399141>`
    );
  } else
    return message.channel.send(
      `Eu dou **__${ratus.user.username}__** ${result}/10 <:blz:725142145526399141>`
    );
};
