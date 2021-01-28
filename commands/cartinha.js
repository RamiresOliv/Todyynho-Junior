const Discord = require("discord.js");
const config_user = require("../config/user.json");

module.exports.run = async (client, message, args) => {
  const user = message.mentions.members.first();

  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.cartinha (@membro) (message)\` `);

  if (!user) {
    return message.channel.send(embed2).then((msg) => msg.delete({ timeout: 20000 }));
  }

  let messages = args.slice(1).join(" ");

  const embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu enviar! 

need = \`()\`
optional = \`{}\`

error: \`undefined message\`
exampler: \`t.cartinha (@membro) (message)\` `);

  if (!messages) {
    return message.channel.send(embed3).then((msg) => msg.delete({ timeout: 20000 }));
  }

  if (user.id === message.author.id) {
    return message.channel.send(
      `Ei ${message.author} Amigo eu não posso te mandar uma auto mensagem... O-O'`
    ).then((msg) => msg.delete({ timeout: 10000 }));
  }

  if (user.id === config_user.userid) {
    message.delete();
    return message.channel.send(
      `Ei ${message.author} Amigo não posso mandar mensagem para meu criador porque ele não quer ninguem atrapalhando seu soninho :>`
    ).then((msg) => msg.delete({ timeout: 10000 }));
  } else {
    message.channel.send(`${message.author} Mensagem enviada!`);

    message.delete();

    if (message.author.id === config_user.userid) {
      user.send(`Ei! ${user} o meu criador <@!${config_user.userid}> te enviou uma mensagem pessoal para você! que sorte 😲
  mensagem: ${message}`);
    } else {
      user.send(`Ei! ${user} o ${message.author} te enviou uma mensagem pessoal
mensagem: ${messages}`);
    }
  }
};
