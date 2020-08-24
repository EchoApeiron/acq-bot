const main = require('../acq');

module.exports = {
    name: "getdodocode",
    description: "Get the currently set Dodo Code.",
    args: false,
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`Your Dodo Code is set to ${main.dodoCode}.`);
    },
};