const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "https://i.kym-cdn.com/photos/images/original/001/583/525/853.jpg",
    "https://live.mrf.io/statics/i/ps/cdn.falauniversidades.com.br/wp-content/uploads/2020/03/20185945/memes.jpg",
    "https://a.wattpad.com/cover/129515888-352-k288387.jpg",
    "https://i.pinimg.com/564x/10/17/a9/1017a9596c7110f62e55b9922d3634f6.jpg",
    "https://cdn.discordapp.com/attachments/750744477290725446/763011417049006100/tenor.gif",
    "https://observatoriodatv.uol.com.br/wp-content/uploads/2017/06/Nazar%C3%A9.gif",
    "https://thumbs.gfycat.com/RedWellgroomedIvorybilledwoodpecker-max-1mb.gif",
    "https://pa1.narvii.com/6458/48302a7a9781aec6a1f0320861562d229899cfe6_00.gif",
    "https://thumbs.gfycat.com/EmbellishedWearyFieldmouse-size_restricted.gif",
    "https://thumbs.gfycat.com/ArtisticChubbyAidi-small.gif",
    "https://pa1.narvii.com/6421/50765308f409b704b87f6e64664c3ac0f8778a06_hq.gif",
    "https://media.tenor.com/images/2df3150ef28a1799471b7d6963031ec0/tenor.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Gfgj7Qz0KG3FJiTUM7H3Crq_pwvGPHwZvQ&usqp=CAU",
    "https://pa1.narvii.com/6599/3970b40079d6eed362efe06dadc029cb5a9174a8_00.gif",
    "https://media1.giphy.com/media/WoF3yfYupTt8mHc7va/giphy.gif",
    "https://media.tenor.com/images/ebcdb89dd3dac8d1434c8151b6bddb16/tenor.gif",
    "https://media1.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
    "https://pa1.narvii.com/7216/08aad95213b9d61f40c051dbef10f3210e7b032cr1-220-220_00.gif",
    "https://i.giphy.com/media/8VLpscHZJ3Rm0/giphy.webp",
    "https://magiagifs.com.br/wp-content/uploads/2019/08/gif-meme5.gif",
    "https://cdn.discordapp.com/attachments/770439420095889409/772266068814725130/IMG-20201024-WA0024.jpg",
  ];

  var rand = list[Math.floor(Math.random() * list.length)];

  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new Discord.MessageEmbed()
    .setTitle("memes!")
    .setColor("#ff0d00")
    .setDescription("mimis veja este aqui!")
    .setImage(rand)
    .setTimestamp()
    .setFooter("memsmesuokfjigdjo");
  await message.channel.send(`${message.author}`, embed);
};
