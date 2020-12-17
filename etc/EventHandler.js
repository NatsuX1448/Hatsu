//Libs
const fs = require('fs'); //File System
const clr = require('chalk'); //Text Color

class eventHandler {
    constructor(client) {
        this.client = client;
        //Load the Method
        this.okEvent();
    }
    okEvent() {
        fs.readdir('./events', (err, data) => {
            if (err) return console.log(clr.red(`Failed to Run EventHandler!, Error:${err}`));
            data.forEach(file => {
                if (!file.endsWith('.js')) return //Nothing
                const events = require(`../events/${file}`);
                //Get File Name
                let eventName = file.split('.')[0];
                //Run the Event
                this.client.on(eventName, events.bind(null, this.client));
                console.log(clr.yellow(`Loading Event:${eventName}`))
            })
        });
    }
}

module.exports = eventHandler