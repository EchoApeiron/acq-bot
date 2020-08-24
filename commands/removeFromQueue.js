const main = require('../acq');

module.exports = {
    name: "removefromqueue",
    description: "Removes the player from the queue.",
    args: false,
    guildOnly: true,
    execute(message) {
        if (!main.queue.get(message.author.id)) {
            return message.channel.send(`${message.author} you are not currently queued.`)
        }

        main.queue.delete(message.author.id);
        message.channel.send(`${message.author} you have been removed from the queue.`);
    },
};