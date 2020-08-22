const main = require('../acq')

module.exports = {
    name: "add",
    description: "Adds a villager to the queue.",
    execute(message, args) {
        if (!args.length) {
            return message.channel.send('No villager specified!');
        }

        let queue = main.queuedPlayers;
        queue.push(args[0]);

        message.channel.send(`Added ${args[0]} to the queue\nCurrent Queue:\n\n${queue}`);
    },
};