require("dotenv").config()

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const  token  = process.env.BOT_TOKEN;


// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS]
});

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.channel.send({ files: ['./assets/tes.jpg'] })
    } else if (msg.content === "padlan") {
        msg.channel.send({ files: ['./assets/padlan.png'] })
    }
    else if (msg.content === "?") {
        msg.channel.send({ files: ['./assets/buntal.jpg'] })
    }
});

// Login to Discord with your client's token


client.login(token);
