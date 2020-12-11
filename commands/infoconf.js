 const Discord = require("discord.js")
 const config_user = require("../Config/user.json")

 exports.run = async (client, message, args) => {

const author = message.author


       const embed = new Discord.MessageEmbed()
       .setTitle("infos pessoais do bot")
       .setDescription(`Bem vindo de vouta ${author.username}!`)
       .addField("Prefix da API", config.prefix, true)
       .addField("Nome da API", client.user.username, true)
       .addField("Criador da API", config.owner2, true)
       .addField("Token da API", `||${config.token}||`, true)
       .addField("Status da API", `Online Stable`, true)
       
       if (author.id === config_user.userid ) {
         message.channel.send(`${author} mihas informações foi para seu PV`)
         author.send(message.author, embed)
       
       } else return message.channel.send(`${author} não posso te mostrar isso sómente meu criador pode ver!`);
 };