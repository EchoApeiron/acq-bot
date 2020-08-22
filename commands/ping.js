module.exports = {
    name: 'ping',
    description: 'Replicates ICMP Ping... but for Bots.',
    execute(message, args) {
        message.channel.send('Pong');
    },
};