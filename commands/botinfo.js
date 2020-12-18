const Discord = require('discord.js');
const config = require("../Config/config.json");

exports.run = async (client, message, args) => {
 
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = ` ${days.toFixed()} \`days\` ${hours.toFixed()} \`hours\` ${minutes.toFixed()} \`minutes\` ${seconds.toFixed()} \`seconds\``;

const version = "v11.3.2"
const prefix = `\`${config.prefix}\``
const helpcmd = `\`${config.prefix}help\``
const owner = `\`${config.owner2}\``
const guilds_all = `\`${client.guilds.cache.size}\``
const members_all = `\`${client.users.cache.size}\``
const channels_all = `\`${client.channels.cache.size}\``
const creatDate =  `\`📆 ${client.user.createdAt.toLocaleString()}\`` 
const memory = `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MBS\``


const status = {
  online: '<:online2:464520569975603200> \`Online\`',
  offline: '<:offline2:464520569929334784> \`Offline\`'
}

   const embed = new Discord.MessageEmbed()
        .setTitle('**me info**')
        .setColor("RANDOM")
        .setDescription(`**Hello** how are you? here is some information about me!`)
        .addField("Prefix", prefix , true)
        .addField("All guilds connected", guilds_all, true)
        .addField("Members of all connected guilds", members_all, true)
        .addField("All channels connecteds", channels_all, true)
        .addField("Owner", owner, true)
        .addField("Memory", memory , true)
        .addField("date creat", creatDate, true)
        .addField("Status", "<:online2:464520569975603200> \`Online\`", true)
        .addField("Command help", helpcmd, true)
        .addField("Bot libraly",`<:logojs:758343631920431186> **discord.js ${version}**`, true)
        .addField('Node.js Version', process.version, true)
        .addField("Bot desenvolved",`**[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** *using* **[Node.js](https://nodejs.org/en/)**`, true)
        .addField("Bot creat",`**[vscode](https://code.visualstudio.com/)**`, true)
        .addField("Discord bots",`**[Visit](https://discord.bots.gg/bots/708843221903605780)**`, true)
        .addField("Guild suport", "**[click here!](https://discord.gg/agnvfC4)**", true)
        .addField("I woke up makes", `${uptime}`)
        .setFooter(`2020 © ${client.user.username}.`)
        .setTimestamp()

message.channel.send(`${message.author}`, embed);
};


//\n
//const prefixo = config.prefix
//.addField("", `\`5 months  23 day 19 hours\``)
//[guild](https://discord.gg/agnvfC4)
//.setFooter('thanks :3 use t.uptime to see my time online')