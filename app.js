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
    } else if (msg.content === "yoibanget") {
        msg.channel.send({ files: ['./assets/yoibanget.jpg'] })
    } else if (msg.content === "parfecto") {
        msg.channel.send({ files: ['./assets/sempurna.jpg'] })
    } else if (msg.content === "irfannn") {
        msg.channel.send({ files: ['./assets/irfan.jpg'] })
        msg.reply("iya ini aku disniii")
    } else if (msg.content === "ivannn") {
        msg.channel.send({ files: ['./assets/ivan.jpg'] })
        msg.reply("apa say")
    } else if (msg.content === "ivan mana") {
        msg.channel.send({ files: ['./assets/ivan2.jpeg'] })
        msg.reply("baru beres colscols gw")
    } else if (msg.content === "cimen") {
        msg.channel.send({ files: ['./assets/ivan3.jpg'] })
    }
});

// Login to Discord with your client's token


client.login(token);
