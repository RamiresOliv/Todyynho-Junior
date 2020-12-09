module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author; 

if (user.id === message.author.id) {
  return message.channel.send(`${message.author} Seu id é \`${user.id}\``)
} else {
  message.channel.send(`
${message.author} o id dele(a) é \`${user.id}\``)
}
};