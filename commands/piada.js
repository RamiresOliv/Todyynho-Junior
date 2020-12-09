/*const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'Oq a galinha disse para o galo?...vc sabe? haaaaa... sla pesquisa',
  'Oque o positivo falo pro negativo você deixou cair um elétron e o negativo falo: negativo',
  'Qual é o animal mais honesto do mundo?... a cobra porquê ele não passa a perna em ninguém',
  'Sabe quando você quer tomar agua? então mas eu não posso por que eu posso queimar ai eu n esisto agora vo la toma agua TOME AGUA MANO'
];

var rand = list[Math.floor(Math.random() * list.length)];

  const m = await message.channel.send(`
  <a:carinamong:760545344546275368> **Piada saindu do forno!**

  ${rand} kkkkkkkkkk ent... nosfa🙃🙃🙃🙃🙃🙃🙃🤣
  `)
}*/


const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports.run = async (bot, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke){
        message.channel.send(`
        ${message.author}!
        <a:carinamong:760545344546275368> **Piada saindu do forno!**  ***(em Inglês)***
        
        ${joke} kkkkkkkkkk ent... nosfa🙃🙃🙃🙃🙃🙃🙃🤣
        `)
    })
}

module.exports.help = {
    name: "joke"
}
