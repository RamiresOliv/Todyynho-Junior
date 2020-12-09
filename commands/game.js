const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**vc quer saber de um jogo?!**')
        .setColor('#ff0d00')
        .setDescription(`que tal SC GO! é o jogo favorito do ramires meu ciador`)
        .setImage('https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/04/03/15543258658938.jpg')
        .setTimestamp()
        .setFooter('Aeeee')
  await message.channel.send(`${message.author}`, embed);
}