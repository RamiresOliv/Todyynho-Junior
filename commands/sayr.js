const config = require("../Config/config.json") 
  
  module.exports.run = async (client, message, args) => {
    
   const saymessage = args.join(' '); 
  if (!saymessage) {
    return message.channel.send(`${message.author} adicione um texto para eu repitir!`)
  }
    
  if (message.author.id === config.owner1) {
  message.channel.send(saymessage);
  message.delete()
  
  } else return message.channel.send(`este cmd só esta disponivel para meu criador tente usar t.say (message)`)
  };