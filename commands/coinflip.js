const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} porfavor insira **cara** ou **coroa** na frente do comando.

need = \`()\`
optional = \`{}\`

error: \`definition not placed\`
exampler: \`t.coinflip (definition)\` `)

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply(embed2);
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send("Caiu! **" + array1[rand] + "**, BOA você ganhou!!! ");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send("Caiu! **" + array1[rand] + "**, infelizmente você perdeu..."
    );
  }
};