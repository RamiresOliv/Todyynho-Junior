const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas você não pode usar o comando por que você não pode \`gerenciar cargos\`.. :/

need = \`()\`
optional = \`{}\`

error: \`you need to manage roles\`
exampler: \`t.mute (@member) {reason}\`
      `);
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} eu não tenho permição para \`gerenciar os cargos\`... porfavor  me de! para eu conseguir mutar

need = \`()\`
optional = \`{}\`

error: \`I need to manage roles\`
exampler: \`t.mute (@member) {reason}\`
      `);
  }

  const user = message.mentions.members.first();

  if (!user) {
    return message.channel.send(
      `
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} desculpe mas olhei até de baixo da minha cama! mas não achei este usuario =/ 

need = \`()\`
optional = \`{}\`

error: \`user not found or wrong mention\`
exampler: \`t.mute (@member) {reason}\`
      `
    );
  }

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "Razão não especificada...";

  let servermuted = message.guild.name;
  if (!servermuted) servermuted = "oh não! o servidor não foi achado?...";

  let muterole = message.guild.roles.cache.find((x) => x.name === "muted");

  if (!muterole) {
    return message.channel.send(`
                :warning: **ERROR**
<:xmark:314349398824058880> Oops ${message.author} oh não! não achei um cargo chamado \`muted\` porfavor crie um =/ 

need = \`()\`
optional = \`{}\`

error: \`role with incorrect name or role not made\`
exampler: \`t.mute (@member) {reason}\`
      `);
  }

  /*if(user.roles.cache.has(muterole)) {
      return message.channel.send(`${message.author} O usuário fornecido já está mutado...`)
    }*/

  if (user.id === "703754491018739763") {
    return message.channel.send(
      `${message.author} Amigo eu não vou deixar você mutar o meu criador!... -_-'`
    );
  }

  if (user.id === message.author.id) {
    return message.channel.send(
      `${message.author} Amigo eu não posso te mutar... O-O'`
    );
  }

  if (user.id === "708843221903605780") {
    return message.channel.send(
      `${message.author} Amigo eu não posso me mutar... T-T`
    );
  }

  user.roles.add(muterole);

  message.delete();

  const embed = new Discord.MessageEmbed()
    .setTitle("**mute**")
    .setColor("#ff0d00")
    .setDescription(`${user} foi mutado pelo ${message.author}`)
    .addField("razão", reason)
    .setTimestamp()
    .setFooter(`Para desmutar utilize t.unmute (@membro)`);
  await message.channel.send(`${message.author}`, embed);

  user.send(
    `<:muted:585767366722584576>**|** EI! **parado ae** você foi mutado no servidor \`${servermuted}\` por que \`${reason}\` quem mandou não ver as regras em!?`
  );
};
