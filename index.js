const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, () => {
  console.log('Bot online!');
});

client.on(Events.MessageCreate, message => {

  if(message.author.bot) return;

  if(message.content === "!ping"){
    message.reply("pong");
  }

});

client.login(process.env.DISCORD_TOKEN);