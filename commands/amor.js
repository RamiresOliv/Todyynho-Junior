const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**o amor...**')
        .setColor('#ff0d00')
        .setDescription(`
Ei vc tem um amor mas não tem oq falar? ok se quizer veja aqui

Um poema...

    Qualquer um que tomasse o seu lugar seria um substituto fraco. ...
    Era como se dissesse, sem dizer, “eu sei que já faz tempo, mas ainda amo você”. ...
    Eu amo você de uma maneira incrível e contraditória. ...
    Mas eu amo você. ...
    Eu amo você, menina... ...
    Eu gosto de você.


EI esta com mendo de falar com ela? use o comando lembre que essa cartinha vai ser escrita por min!
= t.mandar @usuário

ei quer que eu mande uma carta escrita por vc? ok 
= t.cartinha @usuário (mensagem)


se não gostou me desculpe sou só um robô não tenho sentimentos :(`)
        .setTimestamp()
  await message.channel.send(`${message.author}`, embed);
}