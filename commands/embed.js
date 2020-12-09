const Discord = require('discord.js')
const c = require('../Config/config.json')
exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`)//.then(msg=> msg.delete(8000))
    
    const embed3 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu enviar! 

need = \`()\`
optional = \`{}\`

error: \`undefined message\`
exampler: \`t.embed (message)\` `)
.setTimestamp()

    let mensg = args.join(' ')
    if(!mensg) {
        message.channel.send(embed3)
    return undefined;
    }

    const embed = new Discord.MessageEmbed() 
    .setDescription(`${mensg}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Publicado por: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        message.channel.send(embed)
}

exports.help = {
    name: "embed"
}