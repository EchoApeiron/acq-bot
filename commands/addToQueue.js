let main = require('../acq');

module.exports = {
    name: "addtoqueue",
    description: "Adds a villager to the queue.",
    args: false,
    guildOnly: true,
    execute(message, args) {
        main.queue.set(message.author.id, message.author)

        message.channel.send(`${message.author} has been added to the queue.`);
    },
};