const Discord = require("discord.js");
let giveMeAJoke = require("give-me-a-joke");

module.exports.run = async (bot, message, args) => {
  giveMeAJoke.getRandomDadJoke(function (joke) {
    message.channel.send(`
        ${message.author}!
        <a:carinamong:760545344546275368> **Piada saindu do forno!**  ***(em Inglês)***
        
        ${joke} kkkkkkkkkk ent... nosfa🙃🙃🙃🙃🙃🙃🙃🤣
        `);
  });
};
