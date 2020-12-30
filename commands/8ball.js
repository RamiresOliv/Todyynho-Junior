const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu responder! 
       
       need = \`()\`
       optional = \`{}\`
       
       error: \`undefined message\`
       exampler: \`t.8ball (message)\` `);

  if (!args[0]) {
    return message.reply(embed2);
  }

  const embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor coloque uma pergunta com pelo menos 2 espaços! 
          
          need = \`()\`
          optional = \`{}\`
          
          error: \`message must contain 2 spaces\`
          exampler: \`t.8ball (message)\` `);

  if (!args[1]) {
    return message.reply(embed3);
  }
  var list = [
    "Sim",
    "Não",
    "Eu não sei",
    "Pergunte novamente mais tarde!",
    "Não tenho certeza!",
    "Pfv Não",
    "Diz-me tu",
    "Sem duvida",
    "Não posso prever agora",
    "Sem duvida",
    "Melhor você não saber",
  ];
  var rand = list[Math.floor(Math.random() * list.length)];

  const m = message;
  const pw = await m.channel.send(`plz wait...`);
  pw.edit(rand);
};
