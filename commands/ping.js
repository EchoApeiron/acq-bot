module.exports = {
    name: 'ping',
    description: 'Replicates ICMP Ping... but for Bots.',
    execute(message) {
        message.channel.send('Pong');
    },
};