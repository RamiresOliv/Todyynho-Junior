const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
 message.delete({timeout: 200});

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
  let verifLevels = [
    "nehum",
    "baixa",
    "Medio",
    "(╯°□°）╯︵  ┻━┻",
    "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
  ];
  let region = {
    brazil: "Brazil",
    "eu-central": "Central Europe",
    singapore: "Singapore",
    "us-central": "U.S. Central",
    sydney: "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    london: "London",
    amsterdam: "Amsterdam",
    hongkong: "Hong Kong"
  };

  var emojis;
  if (message.guild.emojis.size === 0) {
    emojis = "None";
  } else {
    emojis = message.guild.emojis.size;
  }

  const embed = new Discord.MessageEmbed()
    .setDescription("**Aqui estão os dados do seu servidor:**")
    .setAuthor(
      message.guild.name,
      message.guild.iconURL
        ? message.guild.iconURL
        : client.user.displayAvatarURL
    )
    .setThumbnail(message.guild.iconURL)
    .setTimestamp()
    .addField(
      ":date: | Server Criado",
      `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(
        message.guild.createdAt
      )})`,
      true
    )
    .addField(":id: | ID", message.guild.id, true)
    .addField(
      ":crown: | Dono",
      `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
      true
    )
    .addField(" | Região", region[message.guild.region], true)
    .addField(":white_flower: | Total de membros", message.guild.memberCount, true)
    .addField(
      ":busts_in_silhouette: | Pessoas",
      message.guild.members.cache.filter(m => !m.user.bot).size,
      true
    )
    .addField(
      ":robot: | Bots",
      message.guild.members.cache.filter(m => m.user.bot).size,
      true
    )
    .addField(":abacus: | Cargos", message.guild.roles.cache.size, true)
    .addField(":placard: | Canais", message.guild.channels.cache.size, true)
    .addField(":clipboard: | Verificacão Level", message.guild.verificationLevel, true)
    .setColor(Math.floor(Math.random() * 16777215));
  message.channel.send(`${message.author}`, { embed });
}
