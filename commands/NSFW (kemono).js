//Libs
const nekos = require('nekos.life'); //Neko Wrapper
const hatsuEmbed = require('../etc/HatsuEmbed'); //Embed

//Initialize Neko Module
const Neko = new nekos();


module.exports = {
    name: 'kemono',
    aliases: ["hkemono"],
    NSFW: true,
    description: '[NSFW]:Give Hentai Kemonomimi',
    async execute(msg) {
        const sendBack = msg.channel
        /*
        This Method to Check if the Channel is NSFW or Not is Already Add to Command Handler
        //Check if The Channel is NSFW Channel or Not
        const isNSFW = msg.channel.nsfw
         */
        sendBack.startTyping();
        sendBack.send('Loading ***Hentai Kemono...***').then(c => {
            Neko.nsfw.kemonomimi().then(res => {
                const h = new hatsuEmbed({
                    description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                    color: "#2455ae",
                    image: {url: res.url}
                });
                c.edit('', {embed: h});
            });
            sendBack.stopTyping(true);
        });
    }
}