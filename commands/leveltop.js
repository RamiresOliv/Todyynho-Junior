const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  '❗**o numero de top dele é 10% hmm ele parece que ele n é top**',
  '❗**o numero de top dele é 5% hmm ele parece que ele n é top**',
  '❗**o numero de top dele é 20% wow parece que ele é top!**',
  '❗**o numero de top dele é 25% wow parece que ele é top!**',
  '❗**o numero de top dele é 27% wow parece que ele é top!**',
  '❗**o numero de top dele é 30% wow parece que ele é mesmo top!!**',
  '❗**o numero de top dele é 35% hmm carambolas ele é muito top!**',
  '❗**o numero de top dele é 37% carambolas me parece que ele é muito top!**',
  '❗**o numero de top dele é 40% wow ELE É MUITO MUITO TOP!!!**',
  '❗**o numero de top dele é 45% wow ELE É MUITO MUITO TOP!!!**',
  '❗**o numero de top dele é 55% wow ELE É MUITO MUITO TOP!!!**',
  '❗**o numero de top dele é 50% wow ELE É MUITO MUITO TOP!!!**'
];

var rand = list[Math.floor(Math.random() * list.length)];

    const user = message.mentions.members.first();

const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.kick (@member) {reason}\` `)

    if (!user) {
      return message.channel.send(embed2);
    }

/*
utilize isso não muda não cara :D
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('regas para ser top!')
        .setColor('#ff0d00')
        .setDescription(`**caramba! sera q ${user} é top??**
vamos fazer o teste... se tiver a cima de 10 ele é top se tiver entre o 20 e 30 ele é top intermediário! e se ele for em 40 a 50 ele é MUITO TOP mas depende se a pessoa mencionada é top...
${rand}`)

//"https://images.emojiterra.com/twitter/v13.0/512px/1f60e.png"

        .setTimestamp()
        .setThumbnail("https://images.emojiterra.com/twitter/v13.0/512px/1f60e.png")
        .setFooter('Isso nã importa todos são tops!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(`${message.author}`, embed);
}