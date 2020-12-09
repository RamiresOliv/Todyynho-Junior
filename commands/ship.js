const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 var list = [
  '0%  [..........] 😭 quase impossível',
  '10% [█.........] 😔 muito difícil',
  '20% [██........] 😩 difícil',
  '30% [███.......] ☺️ talvez role alguma coisa',
  '40% [████......] 🙂 as chances são grandes',
  '50% [█████.....] 😌 quase certeza que vai rolar!',
  '60% [██████....] 😁 pode ser amor verdadeiro 💕',
  '70% [███████...] 😃 eles parecem almas gêmeas',
  '80% [████████..] 😀 amor verdadeiro ❤️',
  '90% [█████████..] 😚 eles tem que ficar juntos',
  '100% [██████████] eles se amam totalmente! 😍 💕'
 ];
   
var rand = list[Math.floor(Math.random() * list.length)];

const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.userinfo (@membro)\` `)

  if (!args[0])
    return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei o usuario1 =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.ship (@member1) (@member2)\`
      `);

 if (!args[1])
    return message.channel.send( `
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei o usuario2 =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.ship (@member1) (@member2)\`
      `);
 /*
 message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
 */

  const embed = new Discord.MessageEmbed()
        .setTitle('**Ship!**')
        .setColor('#ff0d00')
        .setDescription(`Será que ${args[1]} tem chance com ${args[0]}?`)
        .addField("chances",rand)
        .setTimestamp()
        .setFooter('oh! huhu temos augo?')
        //.setAuthor(message.author.tag, avatar);
  await message.channel.send(`${message.author}`, embed);
};