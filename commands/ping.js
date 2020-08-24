module.exports = {
    name: 'ping',
    description: 'Replicates ICMP Ping... but for Bots.',
    args: false,
    guildOnly: false,
    execute(message) {
        message.channel.send('Pong');
    },
}