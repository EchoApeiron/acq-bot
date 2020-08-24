const main = require('../acq');
const config = require('../config.json');

module.exports = {
    name: "senddodocode",
    description: "Sends the set Dodo Code to the current queued users.",
    args: false,
    guildOnly: true,
    execute(message, args) {
        if (!main.dodoCode) {
            return message.channel.send(`No Dodo Code was specified!!!\nPlease set a code before sending it to the queued members.`)
        }

        if (main.queue.size == 0) {
            return message.channel.send(`No users queued to send Dodo Code to.`)
        }

        let length = 0;
        if (main.queue.size > config.Queue.MaxIslandVisitors) {
            length = config.Queue.MaxIslandVisitors;
        }
        else {
            length = main.queue.size;
        }

        for (let i=0;i<length;i++){
            for (let [key,value] of main.queue) {
                message.author.id = key; 
                message.author.send(`This is the code to visit the island: ${main.dodoCode}`);
            }
        }
        
        message.channel.send(`There are queued users, but command is still under development.`);
    },
};