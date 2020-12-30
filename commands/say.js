const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas você não pode usar o comando por que você não pode \`gerenciar servidor\`.. :/ 
 
 need = \`()\`
 optional = \`{}\`
 
 error: \`you need to manage guild\`
 exampler: \`t.say (message)\` `);

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(embed2);

  const embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas escreva uma mensagem para eu repitir! 
 
 need = \`()\`
 optional = \`{}\`
 
 error: \`undefined message\`
 exampler: \`t.say (message)\` `);

  if (!args[0]) return message.channel.send(embed3);
  const sayMessage = args.join(" ");
  message.channel.send(sayMessage);
  message.delete(); //.catch(O_o => {});
};
