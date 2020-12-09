const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed() 
    .setColor('#ff0d00')
    .setTitle(`**como relatar um bug**`) 
    .setDescription(
      `oq devo fazer? [clique aqui!](https://discord.gg/N2rwQER)`
    )
    .setTimestamp()
    .setFooter(`bom entre no servidor então lá vc relate seu bug flw obrigado`);
 await message.channel.send(`${message.author}`, embed); 

};