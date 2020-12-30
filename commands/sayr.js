const config = require("../config/config.json");
const config_user = require("../config/user.json");

module.exports.run = async (client, message, args) => {
  const saymessage = args.join(" ");
  if (!saymessage) {
    return message.channel.send(
      `${message.author} adicione um texto para eu repitir!`
    );
  }

  if (message.author.id === config_user.userid) {
    message.channel.send(saymessage);
    message.delete();
  } else
    return message.channel.send(
      `este cmd só esta disponivel para meu criador tente usar t.say (message)`
    );
};
