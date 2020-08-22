module.exports = {
    name: 'arguments',
    description: 'Test Command for using arguments',
    execute(message, args) {
        if (args.length < 1) {
            return message.channel.send(`You didn't supply any arguements ${message.author}!`);
        }

        message.channel.send('You have entered the command successfully');
    },
};