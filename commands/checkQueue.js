const main = require('../acq');
const Discord = require('discord.js');

module.exports = {
    name: "checkqueue",
    description: "Check the current queue.",
    execute(message) {
        let length = 0;

        if (main.queue.size == 0) {
            return message.channel.send(`There are currently no members queued.`);
        }
        else if (main.queue.size > 10) {
            length = 10;
        }
        else {
            length = main.queue.size;
        }

        let queued = ""; 

        for (let i=0;i<length;i++){
            for (let [key,value] of main.queue) {
                queued += `${i+1}: ${value} => ${key}`;
            }
        }

        let embed = new Discord.MessageEmbed()
        .setColor('#FF2D00')
        .addFields(
            { name: 'Current Queue', value: queued },
        )

        message.channel.send(embed);
    },
};