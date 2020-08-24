const main = require('../acq');

module.exports = {
    name: "setdodocode",
    description: "Sets the Dodo Code to be set for queued players.",
    args: true,
    usage: '<dodo_code>',
    guildOnly: true,
    execute(message, args) {
        main.dodoCode = args[0];

        message.channel.send(`Dodo Code has been set to ${main.dodoCode}.`);
    },
};