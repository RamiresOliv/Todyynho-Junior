const Discord = require('discord.js')

exports.run = async (client, message, args) => {

//aqui vai ver o id

const id = args.join(' ')

const guild = client.guilds.cache.get(id);

//aqui é as verificações

const embed2 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas define um id de um servidor! =/ 

need = \`()\`
optional = \`{}\`

error: \`ID not defined\`
exampler: \`t.guild (ID)\` `)

if (!id) {
  return message.channel.send(embed2)
}

const embed3 = new Discord.MessageEmbed() 
.setColor("#fff200")
.setTitle(":warning: **ERROR**")
.setDescription(`<:xmark:314349398824058880> Oops ${message.author} desculpe mas ${id} não é um ID valido! =/ 

need = \`()\`
optional = \`{}\`

error: \`Invalid ID or nonexistent ID\`
exampler: \`t.guild (ID)\` `)

if (!guild) {
return message.channel.send(embed3)
}

//aqui esta as definições

let verifLevels = [
  "nehum",
  "baixa",
  "Medio",
  "(╯°□°）╯︵  ┻━┻",
  "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"
];

let region = {
  brazil: ":flag_br: Brazil",
  "eu-central": ":flag_eu: Central Europe",
  singapore: ":flag_sg: Singapore",
  "us-central": ":flag_us: U.S. Central",
  sydney: ":flag_au: Sydney",
  "us-east": ":flag_us: U.S. East",
  "us-south": ":flag_us: U.S. South",
  "us-west": ":flag_us: U.S. West",
  "eu-west": ":flag_eu: Western Europe",
  "vip-us-east": ":flag_us: VIP U.S. East",
  london: ":flag_gb: London",
  amsterdam: ":flag_nl: Amsterdam",
  hongkong: ":flag_hk: Hong Kong"
};

const ro = region[client.guilds.cache.get(id).region]

const mal = `\`${client.guilds.cache.get(id).members.cache.size}\``

const owner = `\`${client.guilds.cache.get(id).owner.user.username}#${client.guilds.cache.get(id).owner.user.discriminator}\``

const vl = `\`${client.guilds.cache.get(id).verificationLevel}\``

const ngm = `**${guild}**`

//e aqui ele vai lançar a mensagem!

let embed = new Discord.MessageEmbed() 
.setColor(Math.floor(Math.random() * 16777215))
.setThumbnail(guild.iconURL({dynamic: true, size: 1024}))
.addField(":bookmark: name", ngm)
.addField(":crown: owner", owner)
.addField(":id: id", id, true)
.addField(":card_box:  members", mal, true) 
.addField(":globe_with_meridians: region", ro, true)
.addField(":shield: verified level", vl, true)
message.channel.send(`${message.author}`, embed);
}