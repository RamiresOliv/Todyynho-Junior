
const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let embed = new Discord.MessageEmbed() 
    .setThumbnail(`https://images.emojiterra.com/google/android-nougat/512px/1f4a3.png`)
    .setColor('#ff0d00')
    .setTitle(`**campo minado** ${message.author.username}`) 
    .setDescription(
      `||:zero:||||:one:||||:one:||||:one:||||:one:||||:boom:||||:two:||||:one:||||:zero:|| 
 ||:zero:||||:two:||||:boom:||||:three:||||:two:||||:two:||||:boom:||||:one:||||:zero:||
 ||:zero:||||:two:||||:boom:||||:boom:||||:one:||||:two:||||:two:||||:two:||||:zero:|| 
 ||:two:||||:three:||||:three:||||:two:||||:one:||||:one:||||:boom:||||:one:||||:zero:|| 
 ||:boom:||||:boom:||||:two:||||:zero:||||:zero:||||:one:||||:one:||||:one:||||:zero:||
 ||:three:||||:boom:||||:three:||||:one:||||:one:||||:zero:||||:zero:||||:zero:||||:zero:|| 
 ||:one:||||:one:||||:two:||||:boom:||||:one:||||:zero:||||:zero:||||:zero:||||:zero:|| 
 ||:zero:||||:zero:||||:one:||||:one:||||:one:||||:zero:||||:zero:||||:zero:||||:zero:|| 
 ||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:||||:zero:|| `
    )
    .setTimestamp()
    .setFooter(`wow gostou? heah`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(`${message.author}`, embed); 

};