const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "Clima",
    description: "Verifica a previsão do tempo",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){

        //if(error) return message.channel.send(error);

const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas coloque a signa de uma cidade ou uma cidade para ver o clima! =/ 

need = \`()\`
optional = \`{}\`

error: \`city or location ​​not placed\`
exampler: \`t.climate (city)\` `)

//args.slice(1).join(" ")
const erro = args.join(" ")

        if(!args[0]) return message.channel.send(embed2)

const embed3 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas \`${erro}\` não é uma cidade ou localização valida! =/  

need = \`()\`
optional = \`{}\`

error: \`invalid location\`
exampler: \`t.climate (city)\` `)

        if(result === undefined || result.length === 0) return message.channel.send(embed3);
      
      
//invalid location
//\`city or location ​​not placed\`


        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Previsão do tempo para ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuso horário', `UTC${location.timezone}`, true)
        .addField('tipo de grau', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vento', current.winddisplay, true)
        .addField('Parece', `${current.feelslike}°`, true)
        .addField('Umidade', `${current.humidity}%`, true)


        message.channel.send(`${message.author}`, weatherinfo)
        })        
    }
}