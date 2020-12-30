const Discord = require("discord.js");
const config = require("../config/config.json");

exports.run = async (client, message, args) => {
  const palavra_chave = args.join(" ");

  let embed3 = new Discord.MessageEmbed()
    .setColor("#fff200")
    .setTitle(`:warning: **ERROR**`)
    .setDescription(`<:xmark:314349398824058880> Oops ${message.author.username} porfavor escolha um deles.
   \`\`\`fix
   ${config.prefix}help diversão1
   ${config.prefix}help diversão2\`\`\`
   
   ERROR: o comando t.help diversão não foi definido`);

  let embed = new Discord.MessageEmbed()
    .setColor("#ff0d00")
    .setTitle(`pediu ajuda?`)
    .setDescription(
      `<a:twitchbits:760845867207884880> **Ajuda** (Humana)**|** presisa de ajuda entre no meu server de suporte!
[servidor](https://discord.gg/agnvfC4)

<:marcamarcada:755257919934562376>​ **Comandos|** quer saber meus comandos? utilize
**
${config.prefix}help diversão1
${config.prefix}help diversão2
${config.prefix}help adiministração
${config.prefix}help outros**

<a:batendo:710680301520552026> **website|** sim meu proprio site! 
[website](https://gabrielramiresdeol.wixsite.com/todyynhojunior)

<a:cofrepe:759800697830506536> **easteregg|** easteregg escondido no meu site! :0

🆙 **sobre min|** gostaria de ver mais?
[visitar](https://discord.bots.gg/bots/708843221903605780)

🛠 **Meu Git Hub|** lá esta eu inteiro! :D
[visitar](https://github.com/gabrielramires/Todyynho-Junior)

♻️ **Atualizações|** nos temos no sistema:

=mute
=unmute
=userinfo

➕** Novos|** coisas a mais que adicionamos:

=avatar
=info
=compact
=servericon

📄 **nota|** Se o ${client.user.username} for utilizado de forma mal em algum servidor lembre-se que **não somos responsáveis** por nada só mente por problemas técnicos obrigado.`
    )
    .setTimestamp()
    .setFooter(
      `• estou em ${client.guilds.cache.size} servidores conectados! obrigado por seu apoio`,
      message.author.displayAvatarURL({ format: "png" })
    );

  if (!args[0]) {
    return message.channel.send(embed);
  } else if (message.content.includes("diversão1")) {
    message.channel.send(`${message.author}
       \`\`\`js
        ♾ Olá ${message.author.username} eu sou todyynho zuero kkk mas bom essa é a parte 1 dos comandos de diverção! 😁 🥳

        definições 
        presiso = ()
        opcional = {}

        Definitions
        need = ()
        optional = {}

       "t.8ball (pergunta)"
       //oque posso prever para você?

       "t.advise"
       //palavras do dia

       "t.avatar {@membro} <== OBS se quizer ver também o avatar do seu amigo mencione ele(a) na frente do comando!"
       //veja seu ou de outra pessoa o avatar

       "t.campominado"
       //campo minado...

       "t.cat"
       //gatinhos :3

       "t.cooks"
       //QUANTOS COOKS FORAM VENDIDOS AGR!

       "t.cow"
       //memes de vacas

       "t.dej"
       //emoojis :>

       "t.flip (message)"
       //ele flipa o texto

       "t.fonte (message)"
       //transforma textos em outra fonte

       "t.gato"
       //que gato em?...

       "t.rr"
       //brincadeira de roleta russa vamos ver se dispara!

       "t.bottleflip"
       //se cair em pé você me deve um abraso

       "t.dog"
       //fotos aleatorias de cachorrinhos fofos :3

       "t.cat"
       //fotos aleatorias de gatinhos fofos :3

       2020 © ${client.user.username}.\`\`\``);
  } else if (message.content.includes("diversão2")) {
    message.channel.send(`${message.author}
        \`\`\`js
        ♾ Olá ${message.author.username} eu sou todyynho zuero kkk mas bom essa é a parte 2 dos comandos de diverção! 😁 🥳 

        definições 
        presiso = ()
        opcional = {}

        Definitions
        need = ()
        optional = {}
           
       "t.mina"
       //hmm que mina em?..

       "t.hug"
       //abra-se alguem

       "t.lenny"
       //carinha 2 :)

       "t.leveltop (@membro)"
       //vamo ve se essa pessoa é top mesmo!

       "t.memes"
       //memes de qualidade... só q naum ;-

       "t.mina"
       //uia q mina..

       "t.nutela"
       //hmm nutela..

       "t.parabéns (@membro)"
       //mande um parabéns para ele...

       "t.piada"
       //uma piada uia

       "t.rate {@member}"
       //ta vou avaliar esse usuário

       "t.reverse (message)"
       //᠎ ...aditrevne megasnem

       "t.ship (@member1) (@member2)"
       //vamos ver se eles são pra namorar

       "t.shrug"
       //outra carinha

       "t.tableflip"
       //outra carinha... :P

       "t.todyynho"
       //meus todyynhos :O, sim cada segundo eu tenho mais ou menos todyynhos...

       "t.txtflip (message)"
       //pǝɯousʇɹɐção
       
        2020 © ${client.user.username}.\`\`\``);
  } else if (message.content.includes("adiministração")) {
    message.channel.send(`${message.author}
        \`\`\`js
        🔰Olá ${message.author.username} eu sou todyynho zuero kkk mas bom esses são os comandos recomendados para adiministradores! staffs e etc

        definições 
        presiso = ()
        opcional = {}

        Definitions
        need = ()
        optional = {}

   
        "t.kick (@membro) {rasão}"
        //expulse alguem! cleitim não era o impostor
    
        "t.mute (@membro) {rasão}"
        //sileicie alguem! para ele não falar nada o mute é permanente para desmutar  use t.unmute (@membro)
    
        "t.unmute (@membro) {rasão}"
        //desmute alguem! ou? mudou de idea com o mute? use t.unmute (@membro) então

        "t.userinfo (@membro) OBS pode colocar IDs também!"
        //informações de um usuário!

        "t.embed (message)"
        //crie sua propria embed

        "t.lock"
        //feixa o canal que o comando foi usado

        "t.unlock"
        //abre o canal que o comando foi usado

        "t.id (@membro)"
        //pegue ID dos membros mais rapido

        "t.poll (message)"
        //inicie uma votação!

        "t.slowmode (segundos)" (para remover o slowmode use t.slowmode 0)
        //ele muda o tempo que as pessoas podem falar no canal que o comando foi usado
        
        2020 © ${client.user.username}.\`\`\``);
  } else if (message.content.includes("outros")) {
    message.channel.send(`${message.author}
        \`\`\`js
        🔮 Olá ${message.author.username} eu sou todyynho zuero kkk mas esses são os comando que presisa de permições/"diverções"

        definições 
        presiso = ()
        opcional = {}

        Definitions
        need = ()
        optional = {}

   
        "t.cartinha (@membro) (mensagem)"
        //mande uma cartinha para alguem!
    
        "t.say (message)"
        //fassa e repitir algum texto
    
        "t.clear (quantidade) exemple: min 1  max 99"
        //limpe mensagens!
        
        "t.help"
        //ajuda :>
        
        "t.advise"
        //recados para a vida...
        
        "t.algobom"
        //canais legais pode confiar ok?..
        
        "t.botinfo"
        //informações do bot

        "t.adicionar"
        //me adicione em seu maravilhoso servidor! :D

        "t.id (@membro)"
        //id de alguma pessoa

        "t.serverinfo"
        //informações deste servidor

        "t.guild (id do serv)"
        //informaçõoes do id de algum server

        "t.uptime"
        //o tempo que eu estou acordado!

        "t.github"
        //meu proprio GitHub!!
        
        2020 © ${client.user.username}.\`\`\``);
  } else if (message.content.includes("diversão")) {
    return message.channel.send(message.author, embed3);
  } else {
    message.channel.send(
      `Ei ${message.author} infelizmente \`${palavra_chave}\` não é uma palavra chave certa porfavor tente novamente...`
    );
  }
};
