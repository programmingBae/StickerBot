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

const re = new RegExp('(dlan)');

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.channel.send({ files: ['./assets/tes.jpg'] })
    // } else if (re.test(msg.content)) {
    //     msg.channel.send({ files: ['./assets/padlan.png'] })
    // }
    }
    else if (msg.content === "?") {
        msg.channel.send({ files: ['./assets/buntal.jpg'] })
    } else if (msg.content === "yoibanget") {
        msg.channel.send({ files: ['./assets/yoibanget.jpg'] })
    } else if (msg.content.toLowerCase() === "parfecto") {
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
    } else if (msg.content === "cinareme") {
        msg.channel.send({ files: ['./assets/ivan3.jpg'] })
        msg.reply("wcingcowa! haiyaa~")
    } else if (msg.content === "hbd pijall") {
        msg.channel.send({ files: ['./assets/hbdpijal.png'] })
    } else if (msg.content === "menatap masa depan") {
        msg.channel.send({ files: ['./assets/masadepan.jpg'] })
    } else if (msg.content.toLowerCase() === "akbareee") {
        msg.channel.send({ files: ['./assets/akbare.jpg'] })
        msg.reply("apa bebs")
    } else if (msg.content.toLowerCase() === "gipaway irfan ivan akbar") {
        msg.channel.send({ files: ['./assets/gipaway.png'] })
        msg.reply("apa bebs")
    } else if (msg.content === ":afh iyh"){
        const author = msg.member;
        const webhook = msg.channel.createWebhook(author.displayName, {
            avatar: author.displayAvatarURL({ dynamic: true })
        }); 
        msg.delete();
        webhook.send({files : ['./assets/apa-iya.jpg']});

    }
});

// Login to Discord with your client's token


client.login(token);
