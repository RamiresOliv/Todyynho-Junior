const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    var roulette = [':gun: Pow! Você está morto , tentar novamente?',':gun: Felizmente para você, ***você sobreviveu***! Você gostaria de testar sua sorte novamente?',':gun: Oh não, não disparou! Ou isso é uma coisa boa? (Tente novamente)'];
    message.channel.send(roulette[Math.floor(Math.random () * roulette.length)]);
  }