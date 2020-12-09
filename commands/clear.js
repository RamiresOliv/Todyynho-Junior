const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe Oh não você não tem permição para este comando! você presisa \`gerenciar mensagens\`.. :/ 

need = \`()\`
optional = \`{}\`

error: \`you need to manage messages\`
exampler: \`t.clear (quantity)\` `)



  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(embed2);

const embed3 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor forneça um número de **1 mensagens** até **99 mensagens**.. =/ 

need = \`()\`
optional = \`{}\`

error: \`undefined quantity use a number from 1 to 99\`
exampler: \`t.clear (quantity)\` `)


  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(embed3);

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`${args[0]} mensagens limpas nesse canal!`)//.then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};