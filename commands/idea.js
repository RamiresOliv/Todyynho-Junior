const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const m = await message.channel.send(`** *ERROR* ** **404**  **${message.author.username}** Oh oh... não achei este comando... sera que foi escluido ou não feito..? eu acho que seria a segunda opisão ou era pra ele não existir A NAU SEI! descupa ae <a:biximfofo:764138279464599562>
`);

};



/*const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send(
        ` ${message.author} desculpe mas você tem que cer administrador para votar!.. :/`
      );
    }

const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva o conteudo da votação após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça um conteudo da votação de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "755114705999233094");
   const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor('#000000')
    .setTitle(`votação iniciada por ${message.author}`)
    .addField("utilize","para sim✔️ para não ❌")
    .addField("Asunto", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );

  const emojis = ["✔️", "❌"];

 for (const i in emojis) {
    await msg.react(emojis[i])
  } 
}
}
*/  