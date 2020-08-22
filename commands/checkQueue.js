const main = require('../acq')

module.exports = {
    name: "check",
    description: "Check the current queue.",
    execute(message) {
        let queue = main.queuedPlayers;

        message.channel.send(`Current Queue:\n\n${queue}`);
    },
};