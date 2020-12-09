const Discord = require("discord.jts")
const config = require("../Config/config.json") 
module.exports.run = async (client, message, args) => {
   const saymessage = args.join(' '); 
 const embed3 = new Discord.MessageEmbed()
       .setColor("#fff200")
       .setTitle(":warning: **ERROR**")
       .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas escreva uma mensagem para eu repitir! 
     
     need = \`()\`
     optional = \`{}\`
     
     error: \`undefined message\`
     exampler: \`t.say (message)\` `)
     if (!args[0])
       return message.channel.send(embed3);
  if (message.author.id === config.owner1) {
  message.channel.send(saymessage);
  message.delete()
  } else return message.channel.send(`este cmd só esta disponivel para meu criador tente usar t.say (message)`);
  };