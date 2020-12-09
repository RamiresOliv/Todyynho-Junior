const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Você não tem permissão para usar esse comando!')
        message.channel.overwritePermissions([{ 

            id: message.guild.id, 
            
            accept: ['SEND_MESSAGES'], 
            
            }]); 
            
            let embed = new Discord.MessageEmbed()
               .setColor('#00FF00')
               .setTitle('Chat desbloqueado para bloquear use: `t.lock`')
               .setImage('https://cdn.dribbble.com/users/961687/screenshots/6134846/cadeado_800x600.gif')
               .setFooter(`Comando Solicitado por: ${message.author.username}`)


            return message.reply(embed)
    }