 const Discord = require('discord.js');

exports.run = async (client, message, args) => {

   if (!args[0])
    return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.mute (@member)\`
      `);
 
  const m = await message.channel.send(` paraben! ae sim em ${args[0]}
`);
};