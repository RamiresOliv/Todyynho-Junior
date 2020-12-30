const request = require('superagent');

module.exports = {
    name: 'advice',
    description: 'gives a random life advice',
    cooldown: 3,
    execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text)
                    } catch (e) {
                        return message.reply(', an api error occurred.');
                    }
                    const advice = JSON.parse(res.text)
                    message.channel.send(advice.slip.advice)
                } else {
                    console.error(`REST call failed: ${err}, status code: ${res.status}`)
                }
            });
    },
};

const Discord = require('discord.js');

const validate = (color) => {
    if (!color || typeof color !== 'string') return false;
    color = color.replace('#', '');

    switch (color.length) {
        case 3:
            return /^[0-9A-F]{3}$/i.test(color);
        case 6:
            return /^[0-9A-F]{6}$/i.test(color);
        case 8:
            return /^[0-9A-F]{8}$/i.test(color);
        default:
            return false;
    }
};
