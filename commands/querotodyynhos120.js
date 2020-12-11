const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 message.delete().catch(O_o => {});
var list = [

  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM** AHHHHHHHHHHHH Q RAIVA MANO!',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**',
  'Agora ele(a) sabe só **não fala pra NIMGUEM**'
];

var rand = list[Math.floor(Math.random() * list.length)];

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('**ACHEI UM EASTEREGG!!!!**')
        .setColor('#ff0d00')
        .addField("Eu falei pro ramires TIRA mas não",rand)
//        .setImage('https://i.pinimg.com/originals/5f/64/40/5f6440b0f864cf76116fafe0ac2503f7.jpg')
        .setDescription('EIII NÃO É PRA ENTRAR AQUI! mas wha vc achou esse easteregg')
        .setTimestamp()
        .setFooter('sim isso é um easteregg! parabens')
  await message.channel.send(embed);
}