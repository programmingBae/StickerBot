require("dotenv").config()

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const  token  = process.env.BOT_TOKEN;

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});



client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong!");
    }
});

// Login to Discord with your client's token
console.log(token)
client.login(token);
