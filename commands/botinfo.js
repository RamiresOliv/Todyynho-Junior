const Discord = require("discord.js");
const config = require("../config/config.json");
const user_config = require("../config/user.json")

exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptime = ` ${days.toFixed()} \`days\` ${hours.toFixed()} \`hours\` ${minutes.toFixed()} \`minutes\` ${seconds.toFixed()} \`seconds\``;

  const version = "v11.3.2";
  const ownertag = `\`${user_config.ownertag}\``
  const prefix = `\`${config.prefix}\``;
  const helpcmd = `\`${config.prefix}help\``;
  const owner = `\`${config.owner2}\``;
  const guilds_all = `\`${client.guilds.cache.size}\``;
  const members_all = `\`${client.users.cache.size}\``;
  const channels_all = `\`${client.channels.cache.size}\``;
  const creatDate = `\`📆 ${client.user.createdAt.toLocaleString()}\``;
  const memory = `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )} MBS\``;

  const status = {
    online: "<:online2:464520569975603200> `Online`",
    offline: "<:offline2:464520569929334784> `Offline`",
  };

  const embed = new Discord.MessageEmbed()
    .setTitle("**me info**")
    .setColor("RANDOM")
    .setDescription(`**Hello** how are you? here is some information about me! 
    Use "t.infosistem" to see more information`)
    .addField("Prefix", prefix, true)
    .addField("All guilds connected", guilds_all, true)
    .addField("Members of all connected guilds", members_all, true)
    .addField("All channels connecteds", channels_all, true)
    .addField("Owner", ownertag, true)
    .addField("Memory", memory, true)
    .addField("date creat", creatDate, true)
    .addField("Status", "<:online2:464520569975603200> `Online`", true)
    .addField("Command help", helpcmd, true)
    .addField(
      "Bot libraly",
      `<:logojs:758343631920431186> **discord.js ${version}**`,
      true
    )
    .addField("Node.js Version", process.version, true)
    .addField(
      "Bot desenvolved",
      `**[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** *using* **[Node.js](https://nodejs.org/en/)**`,
      true
    )
    .addField("Bot creat", `**[vscode](https://code.visualstudio.com/)**`, true)
    .addField(
      "Discord bots",
      `**[Visit](https://discord.bots.gg/bots/708843221903605780)**`,
      true
    )
    .addField(
      "Guild suport",
      "**[click here!](https://discord.gg/agnvfC4)**",
      true
    )
    .addField("I woke up makes", `${uptime}`)
    .setImage(
      "https://camo.githubusercontent.com/b5c09df6b8063fd9b654ad99987e248cd7e806f84e7f8992f02a98cc041d0ac5/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3737373937343639363931303132373131352f3738363236363137373137333139323731342f756e6b6e6f776e2e706e67"
    )
    .setFooter(`2020 © ${client.user.username}.`)
    .setTimestamp();

  message.channel.send(`${message.author}`, embed);
};



/*

📄 discord.conf
└── discord
    ├── client-token
    │   * Your bot's Discord token
    ├── client-id
    │   * Your bot's client ID
    ├── client-secret
    └── * Your bot's OAuth2 secret

*/
