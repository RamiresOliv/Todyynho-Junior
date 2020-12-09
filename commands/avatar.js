const Discord = require("discord.js"); 
const config = require("../Config/config.json")

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

if(user.id === message.author.id) {

  let embed = new Discord.MessageEmbed() 
  .setColor(`RANDOM`) 
  .setTitle(`Avatar de ${user.username}`) 
  .setDescription(`🖼 quer fazer dowled de seu avatar? então click [aqui!](${avatar})`)
  .setImage(avatar) 
  .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 message.channel.send(`${message.author}`, embed); 

} else if (user.id === config.botid) {
  
  let embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
  message.channel.send(`${message.author}`, embed);
  
} else {

      let embed = new Discord.MessageEmbed() 
      .setColor(`RANDOM`) 
      .setTitle(`Avatar de ${user.username}`) 
      .setDescription(`🖼 quer fazer dowled do avatar dele(a)? então click [aqui!](${avatar})`)
      .setImage(avatar) 
      .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
     message.channel.send(`${message.author}`, embed); 

    } 
};

//.setDescription(`**Clique [aqui](${user.displayAvatarURL}) para baixar a imagem!**`)