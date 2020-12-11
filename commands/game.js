const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**vc quer saber de um jogo?!**')
        .setColor('#ff0d00')
        .setDescription(`que tal SC GO! é o jogo favorito do ramires meu ciador
        

Informações sobre o CSGO

O Counter-Strike: Global Offensive (CS:GO) é a continuação do jogo de equipas cheio de ação que foi pioneiro quando foi lançado há 12 anos atrás.

O CS: GO apresenta-se com novos mapas, personagens, armas e ainda oferece versões atualizadas de conteúdo do CS clássico (de_dust, etc.). Para além disso, o CS:GO introduz novos modos de jogo, matchmaking, tabelas de classificação e muito mais.`)
        .setImage('https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/04/03/15543258658938.jpg')
        .setTimestamp()
        .setFooter('Aeeee')
  await message.channel.send(`${message.author}`, embed);
}