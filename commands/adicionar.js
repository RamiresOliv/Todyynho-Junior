const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  console.log(
    `mais um me adicionou :> nome de é ${message.author} no servidor ${message.guild}`
  );

  let embed = new Discord.MessageEmbed()
    .setThumbnail(
      `https://images.emojiterra.com/google/android-nougat/512px/1f4a3.png`
    )
    .setColor("#ff0d00")
    .setTitle(`**me adicione!**`)
    .addField("Meu servidor", "[servidor](https://discord.gg/r7RrcWr)")
    .addField(
      "Meu link para me adicionar",
      "[adicionar](https://discord.com/oauth2/authorize?client_id=708843221903605780&scope=bot&permissions=1031269599)"
    )
    .addField(
      "Meu site do discord Bot List",
      "[site](https://discord.bots.gg/bots/708843221903605780)"
    )
    .setTimestamp()
    .setFooter(`utilize t.comandos depois de me adicionar :D`);
  message.channel.send(`${message.author}`, embed);
};
