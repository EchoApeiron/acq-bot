let main = require('../acq');

module.exports = {
    name: "addtoqueue",
    description: "Adds a villager to the queue.",
    args: false,
    guildOnly: true,
    execute(message, args) {
        if (main.queue.size > 25) {
            return message.channel.send(`Sorry ${message.author}, but the queue is currently full.\nPlease try queuing again later.`)
        }

        if (main.queue.get(message.author.id)) {
            return message.channel.send(`${message.author} you are already queued.`)
        }

        let userID = message.author.id 
        let displayName = message.member.displayName;

        main.queue.set(userID, displayName)

        message.channel.send(`${message.author} has been added to the queue.`);
    },
};