const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas você não pode usar o comando por que você não pode \`gerenciar cargos\`.. :/

need = \`()\`
optional = \`{}\`

error: \`you need to manage roles\`
exampler: \`t.unmute (@member)\`
      `);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(`
                <a:typingstatus:393836741272010752> **ERROR**
<:xmark:314349398824058880> Oops ${message.author} eu não tenho permição para \`gerenciar os cargos\`... porfavor  me de! para eu conseguir mutar

need = \`()\`
optional = \`{}\`

error: \`I need to manage roles\`
exampler: \`t.unmute (@member)\`
      `);
    }

       const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(       `
                <a:typingstatus:393836741272010752> **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.unmute (@member)\`
      `
      );
    }
   
    let muterole = message.guild.roles.cache.find(x => x.name === "muted")
    
    
      if(!muterole) {
      return message.channel.send(`
                <a:typingstatus:393836741272010752> **ERROR**
<:xmark:314349398824058880> Oops ${message.author} oh não! não achei um cargo chamado \`muted\` porfavor crie um =/ 

need = \`()\`
optional = \`{}\`

error: \`role with incorrect name or role not made\`
exampler: \`t.mute (@member)\``)
    }
    
    /*if(user.roles.cache.has(muterole)) {
      return message.channel.send("O usuário fornecido já está desmutado...")
    }*/

     
    user.roles.remove(muterole)
   
    message.delete();

  const embed = new Discord.MessageEmbed()
        .setTitle('**unmute**')
        .setColor('#ff0d00')
        .setDescription(`${user} foi desmutado por ${message.author}`)
        .setTimestamp()
        .setFooter('você se-arrependeu? utilize t.mute (@membro) denovo :)')
  var embedzim = await message.channel.send(`${message.author}`, embed);
      await embedzim.react("👍");
let pv = user.send(`<a:Polarcop:763595474745032745>**|** EI! vc foi desmutado no servidor **${message.guild.name}**`)
if(!pv) {
return message.channel.send(`${message.author} não foi possivel avisar ${user.username} pello pv`)
}


}