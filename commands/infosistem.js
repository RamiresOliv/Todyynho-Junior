const config_user = require("../config/user.json");
const Discord = require("discord.js");

module.exports = {
  name: 'backup',
  description: 'meu backup',
  run(client, message, args) {

    message.channel.send(`${message.author}, Por favor verifique a sua DM`)

    message.author.send(`${message.author}, Aqui esta um arquivo de Texto sobre TUDO de min gostaria de fazer download?
Essa mensagem sera excluida em 1 minuto.`, {
      files: [
        {
          attachment: "./Downloads/infosistem.txt",
          name: "infosistem.txt"
        }
      ]
    }).then((msg) => msg.delete({ timeout: 100000 }));
  }
}
