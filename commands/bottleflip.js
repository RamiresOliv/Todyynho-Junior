exports.run = (client, message, args) => {
    var list = [ `em pé!, parabéns!`, `em pé!, parabéns!`, `deitada!, não foi dessa vez`, `deitada!, não foi dessa vez`, `deitada!, não foi dessa vez`, `deitada!, não foi dessa vez` ]
    var rand = list[Math.floor(Math.random() * list.length)];
return message.channel.send(`${message.author} E caiu! ${rand}`)
};