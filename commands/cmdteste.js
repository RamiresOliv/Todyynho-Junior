const batata = require("../Config/batata.json");
const config_user = require("../Config/user.json")

exports.run = async (client, message, args) => {

const user = message.author
const userid = message.author.id

if (userid === config_user.userid ) {
    message.delete()
    return message.channel.send(`${user} ${batata.nivel_de_batata}`).then(m => {m.react("764151584145408023")});
  
  } else {
    message.user.send(`Ei ${user} você não tem permição para usar esse comando só mente meu criador ${config.owner2} pode usar.`).then(m => {m.react("781165143156850729")});
  }

};