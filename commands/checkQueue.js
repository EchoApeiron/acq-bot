const main = require('../acq');

module.exports = {
    name: "checkqueue",
    description: "Check the current queue.",
    execute(message) {
        if (main.queue.size == 0) {
            return message.channel.send(`There are currently no members queued.`);
        }
        message.channel.send(`There are members queued... but still working on being able to print them.`);
    },
};