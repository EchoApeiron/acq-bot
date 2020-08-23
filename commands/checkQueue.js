const main = require('../acq');

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
                queued += `User: ${value} => ID: ${key}`;
            }
        }

        message.channel.send(`Current queue:\
        ${queued}`);
        /*
        let user = main.queue.get(message.author.id)

        console.log(user)
        message.channel.send(`There are members queued... but still working on being able to print them.`);
        */ 
    },
};