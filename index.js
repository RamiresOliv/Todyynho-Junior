const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const bot = client
const config = require("./Config/config.json");
const config_user = require("./Config/user.json");
const express = require('express');

const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 5);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(500);
});
app.listen(process.env.PORT);


client.on('ready', () => {

  let activities = [
    `Meu Prefixo: ${config.prefix}`,
    `estou em ${client.guilds.cache.size} servidores!`,
    `presisa de ajuda? use ${config.prefix}help`,
    `me website gabrielramiresdeol.wixsite.com/todyynhojunior`,
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
  console.error(`Um novo erro avista! Error:
` + err);
 } 
});


bot.on('ready', () => {
console.log(`APP successfully logged in on behalf of: ${client.user.tag}.
estou online e agora estou em ${client.guilds.cache.size} servidores, ${client.users.cache.size} usuários e com ${client.channels.cache.size} canais
`)
});
client.login(config.token);
