const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas você não pode usar o comando por que você não pode \`kick membros\`.. :/ 

need = \`()\`
optional = \`{}\`

error: \`you need to kick members\`
exampler: \`t.kick (@member) {reason}\` `);
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.channel.send(embed2);
  }

  const embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} eu não tenho permição para \`kick membros\`... porfavor  me de! para eu conseguir kikar

need = \`()\`
optional = \`{}\`

error: \`I need to kick members\`
exampler: \`t.kick (@member) {reason}\` `);

  if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
    return message.channel.send(embed3);
  }

  const embed4 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.kick (@member) {reason}\` `);

  let member = message.mentions.members.first();
  if (!member) return message.channel.send(embed4);

  const embed5 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas esse usuário é imposivel de kickar =/ 
  
  need = \`()\`
  optional = \`{}\`
  
  error: \`impossible to kick user\`
  exampler: \`t.kick (@member) {reason}\` `);

  if (!member.kickable) return message.channel.send(embed5);

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Rasão não especificada...";

  await member
    .kick(reason)
    .catch((error) =>
      message.channel.send(`Unable to kick user because of: ${error}.`)
    );
  message.channel.send(
    `<a:BANkk:754275896793366579> pronto @${member.user.tag} foi expulso! ninguem mando não ver as regras! bobão.`
  );
  return;
};
