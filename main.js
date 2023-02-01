const { Client, Events, GatewayIntentBits } = require('discord.js');
// import the env
require('dotenv').config();

const token = process.env.TOKEN;
const channelID = process.env.CHANNEL_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds
    ],
});

client.once(Events.ClientReady, c => {
	// Ping everyone in channel with ID channelID
    client.channels.cache.get(channelID).send('@everyone');
});

client.login(token);
