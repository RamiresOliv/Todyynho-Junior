const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.kick (@member) {reason}\` `);

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply("Você não tem permissão para usar esse comando!");
  message.channel.overwritePermissions([
    {
      id: message.guild.id,

      deny: ["SEND_MESSAGES"],
    },
  ]);

  let embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("Chat Bloqueado para desbloquear use: `t.unlock`")
    .setImage(
      "https://onetwopixel.com/wp-content/uploads/2018/02/animat-lock-color.gif"
    )
    .setFooter(`Comando Solicitado por: ${message.author.username}`);

  return message.reply(embed);
};
