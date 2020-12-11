const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var list = [
        'https://shifter.sapo.pt/wp-content/uploads/2020/04/GitHub-Gratuito-Shifter_01.jpg',
        'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/06/github.jpg',
        'https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png'
      ];
      
      var rand = list[Math.floor(Math.random() * list.length)];

    let embed = new Discord.MessageEmbed() 
    .setThumbnail(`https://image.flaticon.com/icons/png/512/25/25231.png`)
    .setColor('#212121')
    .setTitle(`Meu Git Hub`) 
    .setDescription(`quer conhecer meu proprio GitHub?
    [Visitar Git Hub](https://github.com/gabrielramires/Todyynho-Junior)`)
    .setImage(rand)

    let ms = message.author
    message.channel.send(ms, embed)
}