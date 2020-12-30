const Discord = require("discord.js");
const figlet = require("figlet");

exports.run = async (client, message, args) => {
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu enviar! 

need = \`()\`
optional = \`{}\`

error: \`undefined message\`
exampler: \`t.fonte (message)\` `);

  const embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor crie uma mensagem para eu enviar! 

need = \`()\`
optional = \`{}\`

error: \`undefined message\`
exampler: \`t.fonte (message)\` `);

  if (!args[0]) return message.channel.send(embed2);

  msg = args.join(" ");

  figlet.text(msg, function (err, data) {
    if (err) {
      console.log("Algo deu errado");
      console.dir(err);
    }

    if (data.length > 2000) return message.channel.send(embed3);
    //900
    //2000
    message.channel.send("```" + data + "```");
  });
}
