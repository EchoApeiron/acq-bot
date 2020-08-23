// Define our required packages and our bot configuration 
const fs = require('fs');
const config = require('./config.json');
const Discord = require('discord.js');

// Define our constant variables 
const bot = new Discord.Client();
const token = config.Discord.Token; 
let prefix = config.Discord.Prefix;
exports.queue = new Map();

// This allows for us to do dynamic command creation
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

// Event Handler for when the Bot is ready and sees a message
bot.on('message', message => {
    // Check if command is valid and not sent from a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Strip the arguements and then return the original command as well 
	const args = message.content.slice(prefix.length).trim().split(' ');
    const commandName = args.shift().toLowerCase();
    if (!bot.commands.has(commandName)) return;
    const command = bot.commands.get(commandName);

    // Global Command Checks, adds additional functionality for dynamic commands
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`

        if (command.usage) {
            reply += `\nRefer to the command usage below:\n\n${prefix}${command.name} ${command.usage}`
        }

        return message.channel.send(reply);
    }

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
    }

});

// Try and start the bot, fails if invalid token is provided 
try {
    bot.login(token); 
}
catch (error) {
    console.error(error)
}