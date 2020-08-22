// Define our required packages and our bot configuration 
const fs = require('fs');
const config = require('./config.json');
const Discord = require('discord.js');

// Define our constant variables 
const bot = new Discord.Client();
const token = config.Discord.Token; 
const prefix = config.Discord.Prefix;

// This allows for us to do dynamic command creation
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}

// Event Handler for when the Bot is ready and sees a message
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

// Start Bot Activities 
bot.login(token); 