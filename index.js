const Discord = require("discord.js");
const client = new Discord.Client();
const bot = client;
const config = require("./config/config.json");
const config_user = require("./config/user.json");

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(
      `Um membro chamado ${message.author.tag} no servidor ${message.guild.name} errou um comando chamado ${command} ou aconteceu um erro! 
    ` +
      err +
      ` 
    porfavor verifique
    `
    );
  }
});

client.on("ready", () => {
  let activities = [
    `Meu Prefixo: ${config.prefix}`,
    `estou em ${client.guilds.cache.size} servidores!`,
    `presisa de ajuda? use ${config.prefix}help`,
    `sou a fofa e maravilhosa criação do ramires FOFO!`,
    `hi I'm Toodyynho Junior and I'm the portuguese bot from Brazil`,
    `me website gabrielramiresdeol.wixsite.com/todyynhojunior`,
    `${client.users.cache.size} usuários em todos servidores que estou! e ${client.channels.cache.size} canais de servidores que estou!!`,
  ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING",
      }),
    1200 * 10
  );
  client.user.setStatus("PLAYING").catch(console.error);
});

client.on("guildMemberAdd", async (member) => {
  let guild = await client.guilds.cache.get("709810378225483798");
  let channel = await client.channels.cache.get("727001012082049248");
  if (guild != member.guild) {
    return; //console.log(" ");
  } else {
    let embed = await new Discord.MessageEmbed()
      .setColor("#00ff84")
      .setTitle(`Um ${member.user.username} selvagem apareceu!`)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setDescription(
        `**Salve salve ${member.user}!**
        Você acabou de entrar no ${guild.name}, e temos agora ${member.guild.memberCount} membros! aqui você poderá se interagir com fãs do servidor, conversar sobre suas coisas favoritas e muito mais! <a:Dansing2:756599107644293211>`
      )
      .addField(
        "<a:pepesaber:763368307796606996> Fique ligado!",
        `Novas paradas do servidor serão anunciados no <#723342207301713960>!`,
        true
      )
      .addField(
        " <a:carinamong:760545344546275368> Inscreva-se no canal se você ainda não é inscrito!",
        `[canal](https://www.youtube.com/channel/UCL2ZrIjB4oQ5CVPu1nhT7Ew)`,
        true
      )
      .addField(
        "<:SiteRoxinho:754287878434979850> quer ver a twitch de Ramires?!",
        `[twitch](https://www.twitch.tv/gabrielramvires3)`,
        true
      )
      .addField(
        "<:stable:756611866314276925> servidor do meu amigo! ",
        `[servidor](https://discord.gg/vqWbryt)`,
        true
      )
      .setFooter("Ramires fica feliz em ter você no servidor também :3")
      .setThumbnail(
        member.user.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        })
      )
      .setTimestamp();

    channel.send(member.user, embed);
  }
});

client.on("guildMemberRemove", async (member) => {
  let guild = await client.guilds.cache.get("709810378225483798");
  let channel = await client.channels.cache.get("727001012082049248");
  if (guild != member.guild) {
    return;
  } else {
    let embed = await new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`o nosso amigo(a) saiu :(`)
      .setDescription(
        `${member.user.username} saiu do ${guild.name} nunca vamos o esquecer`
      )
      .setImage(
        "https://pa1.narvii.com/7516/d5f83298cbac00702d1144ff91c761f2b5377293r1-457-480_hq.gif"
      )
      .setThumbnail(
        member.user.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        })
      )
      .setFooter(`ID do usuário: ${member.user.id}`)
      .setTimestamp();

    channel.send(embed);
  }
});

bot.on("ready", () => {
  console.log(`APP successfully logged in on behalf of: ${client.user.tag}.
  waiting for host reply...
  
  host answered APP started
  
  estou online e agora estou em ${client.guilds.cache.size} servidores, ${client.users.cache.size} usuários e com ${client.channels.cache.size} canais
  `);
});

client.login(config.token);
