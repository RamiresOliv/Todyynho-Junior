const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const bot = client
const config = require("./Config/config.json");


client.on('ready', () => {

  let activities = [
    `Meu Prefixo: ${config.prefix}`,
    `estou em ${client.guilds.cache.size} servidores!`,
    `presisa de ajuda? use ${config.prefix}help`,
    `${client.users.cache.size} usuários em todos servidores que estou! e ${client.channels.cache.size} canais de servidores que estou!!`
  ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: 'PLAYING'
      }),
    1200 * 10
  );
  client.user.setStatus('PLAYING').catch(console.error);
});

client.on('message', message => {

  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

 const args = message.content
     .trim().slice(config.prefix.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
     const commandFile = require(`./commands/${command}.js`)
     commandFile.run(client, message, args);
 } catch (err) {
  console.error(`Um erro foi detectado!` 
  + err);
 }  
 });

bot.on('ready', () => {
console.log(`I'm online and now I'm on ${client.guilds.cache.size} servers, ${client.users.cache.size} users and ${client.channels.cache.size} channels.
Application name logged ${client.user.tag}!
`)
});

client.login(config.token)
