//Libs
const nekos = require('nekos.life'); //Neko Wrapper
const hatsuEmbed = require('../etc/HatsuEmbed'); //Embed

//Initialize Neko Module
const Neko = new nekos();

module.exports = {
    name: 'hentai',
    cooldown: 6,
    NSFW: true,
    aliases: [''],
    description: '[NSFW] Give You Hentai~',
    async execute(msg){
        //For Simple
        const sendBack = msg.channel
        /*
        This Method to Check if the Channel is NSFW or Not is Already Add to Command Handler
        //Check if The Channel is NSFW Channel or Not
        const isNSFW = msg.channel.nsfw
         */

        //Generate Random Number Between 1 - 12
        const randomNum = Math.floor(Math.random() * (10 - 1) + 1);

                    switch (randomNum) {
                        case 1:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.randomHentaiGif().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 2:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.pussy().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break

                        case 3:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.girlSoloGif().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 4:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.girlSolo().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 5:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.kitsune().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 6:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.holo().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 7:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.holoEro().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 8:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.eroKemonomimi().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                        case 9:
                            sendBack.send('Loading ***Hentai***').then(c => {
                                Neko.nsfw.eroKitsune().then(res => {
                                    const h = new hatsuEmbed({
                                        description: `${msg.author},***Please dont tell my Master ok~ hihi~~***`,
                                        color: "#2455ae",
                                        image: {url: res.url}
                                    });
                                    c.edit('', {embed: h});
                                });
                            });
                            break
                    }
            }
}