const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let avatar = message.author.displayAvatarURL({format: 'png'});

    const embed2 = new Discord.MessageEmbed() 
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas você não pode usar o comando por que você não pode \`gerenciar servidor\`.. :/ 
    
    need = \`()\`
    optional = \`{}\`
    
    error: \`you need to manage guild\`
    exampler: \`t.say (message)\` `)
    
          if (!message.member.hasPermission("ADIMINISTRATOR")) 
          return message.channel.send(embed2);

      let asunto = args.join(" ")
    
      const embed3 = new Discord.MessageEmbed() 
  .setColor("#fff200")
  .setTitle(":warning: **ERROR**")
  .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu enviar! 
  
  need = \`()\`
  optional = \`{}\`
  
  error: \`undefined message\`
  exampler: \`t.poll (message)\` `)
      
      if(!asunto) {
        return message.channel.send(embed3)
      }

        let embed = new Discord.MessageEmbed() 
       .setColor(0x00A2E8)
       .setAuthor(`author ${message.author.username}#${message.author.discriminator}`, avatar)
       .setTitle("Polltime")
       .setDescription(`${message.author.username} iniciou uma votação! ` + "<a:biximfofo:764138279464599562>")
       .addField("asunto", asunto)
       .addField("utilize", `para sim <:tickYes:764151584145408023> /  para não <:tickNo:764151560368291860>`)

        message.channel.send(embed).then(m => {
            m.react("764151584145408023");
            m.react("764151560368291860");
            message.delete()
           })
}
   