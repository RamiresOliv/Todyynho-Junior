const user_config = require("../config/user.json");

module.exports.run = async (bot, message, args) => {
  const error = args.join(" ");
  let user = message.mentions.users.first() || message.author;

  if (user.id === message.author.id) {
    return message.channel.send(`Ei ${message.author} Seu id é \`${user.id}\``);
  } else if (!user) {
    return message.channel.send(
      `Ei ${message.author} \`${error}\` não é um usuário valido!`
    );
  } else if (message.mentions.users.first()) {
    return message.channel.send(
      `Ei ${message.author} o id dele(a) é \`${user.id}\``
    );
  }
};
