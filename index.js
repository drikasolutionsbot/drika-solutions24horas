const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();
const express = require('express');

const app = express();

// ==============================
// CRIAR CLIENTE DO BOT
// ==============================

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// ==============================
// BOT PRONTO
// ==============================

client.once(Events.ClientReady, () => {
  console.log(`Bot online! Logado como ${client.user.tag}`);
});

// ==============================
// COMANDOS
// ==============================

client.on(Events.MessageCreate, message => {

  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }

});

// ==============================
// LOGIN BOT
// ==============================

client.login(process.env.DISCORD_TOKEN);

// ==============================
// SERVIDOR WEB (PARA RAILWAY)
// ==============================

app.get("/", (req, res) => {
  res.send("DRIKA SOLUTIONS BOT ONLINE 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor web ativo na porta ${PORT}`);
});