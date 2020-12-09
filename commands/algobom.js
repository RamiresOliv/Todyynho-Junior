const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [

  'https://www.youtube.com/channel/UCL2ZrIjB4oQ5CVPu1nhT7Ew',
  'https://www.youtube.com/channel/UCAeUI-7yrnGhB8wnwhecU5A',
  'https://www.youtube.com/channel/UCfxoWfGxbeshcfHZNwLXxBw'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**Achei!**')
        .setColor('#ff0d00')
        .setDescription('Olha q tal isso a galera que o ramires confia!')
        .addField("<a:Dansing:754276487510753360> amiguinhos",rand)
        .setTimestamp()
        .setFooter('sim deboa quer saber mais outro? use t.algobom novamente!')
  await message.channel.send(`${message.author}`, embed);
}