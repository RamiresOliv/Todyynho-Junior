const config_user = require("../config/user.json");
const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args) => {
  const id = args.join(" ");

  let user = message.mentions.users.first() || client.users.cache.get(id);
  const embed2 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(":warning: **ERROR**")
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas ${id} não é um ID valido! =/ 

need = \`()\`
optional = \`{}\`

error: \`Invalid ID or nonexistent ID\`
exampler: \`t.id (ID)\` `);
  if (!user) return message.channel.send(embed2);

  const tag = `\`${user.username}#${user.discriminator}\``;
  const ui = `\`${user.id}\``;
  const status = {
    online: "<:online2:464520569975603200>",
    idle: "<:away:313956277220802560>",
    dnd: "<:dnd2:464520569560498197>",
    offline: "<:offline2:464520569929334784>",
  };
  const bot = user.bot
    ? "<:botTag:230105988211015680>"
    : "<:discord:314003252830011395>";
  const title = ` ${bot} ${status[user.presence.status]} ${user.username}#${user.discriminator
    }`;
  const created_Date = `\`${formatDate(
    "DD/MM/YYYY às HH:mm:ss",
    user.createdAt
  )}\``;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embedBot = new Discord.MessageEmbed()
    .setThumbnail(avatar)
    .setTimestamp()
    .setTitle(
      `${bot} <:online2:464520569975603200> ${user.username}#${user.discriminator}`
    )
    .addField(":id: id", ui, true)
    .addField(":bookmark: tag discord", tag, true)
    .addField(":mailbox_with_mail: mention", user, true)
    .addField(":calendar_spiral: Conta criada em", created_Date, true)
    .setFooter(
      `comando utilizado `,
      message.author.displayAvatarURL({ format: "png" })
    );

  if (user.id === config_user.botid) {
    message.channel.send(`${message.author}`, embedBot);
  } else {
    let embed = new Discord.MessageEmbed()
      .setThumbnail(avatar)
      .setTimestamp()
      .setTitle(title)
      .addField(":id: id", ui, true)
      .addField(":bookmark: tag discord", tag, true)
      .addField(":mailbox_with_mail: mention", user, true)
      .addField(":calendar_spiral: Conta criada em", created_Date, true)
      .setFooter(
        `comando utilizado por ${message.author.username}`,
        message.author.displayAvatarURL({ format: "png" })
      );
    message.channel.send(`${message.author}`, embed);
  }
  /**
   * Formata a data passada para o padrão do Brasil.
   * @param {string} template
   * @param {Date=} [date]
   * @return {string}
   */
  function formatDate(template, date) {
    var specs = "YYYY:MM:DD:HH:mm:ss".split(":");
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date
      .toISOString()
      .split(/[-:.TZ]/)
      .reduce(function (template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
  }
};
