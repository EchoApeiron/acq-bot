# Animal Crossing Queue Bot 

## Pre-requisites 

### discord.js (Version 12.3.1+)
npm install discord.js 

### fs (latest from NPM)
npm install fs 

## Basic Setup 

1) Install pre-requisites 
    - Use above section for install pre-requisites if not done already
1) Setup your config file 
    - You can rename the example to config.js
    - Be sure to add your Discord Bot Token to the config or it wiil break
1) Run the bot 
    - Ex. node acq.js 
    - Recommended you set this up with pm2


#### Basic Use 

This is a simple bot that allows all users currently to interact with it. ***Permissions will be added in time. Bot is still in development*** 

It allows for a Dodo Code to be set, from there players can queue themselves in order to receive this code. Only X number of people can be in queue at time, and only Y number of people will be sent the code while in queue. These are configured in the config file as well. Players at this time must remove themselves from the queue. There is currently no other way to remove a player from queue unless they remove themselves. 



## Still in Development!!! 

Currently this is still in development but if someone can make use of it as is go for it. The current plans are as follows to help make it better: 

1) Implement a command permissions system. 
1) Add a better dynamic command handler (or switch to Commando?)
    - Better organization of command files, allow for use of sub-directories 
1) Improve queue capabilities 
    - Migrate to database queue system 
    - Allow owners, admins, and mods? to remove users from queue
    - Auto-removal from queue after Z amount of time 
1) Implement class abstractions 
    - Make more object orientented 