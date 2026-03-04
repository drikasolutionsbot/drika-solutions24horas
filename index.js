const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

// Criar cliente do bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Quando o bot iniciar
client.once(Events.ClientReady, () => {
  console.log(`Bot online! Logado como ${client.user.tag}`);
});

// Comandos simples
client.on(Events.MessageCreate, message => {

  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }

});

// Login do bot
client.login(process.env.DISCORD_TOKEN);


// ==============================
// SERVIDOR WEB PARA RAILWAY
// ==============================

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DRIKA SOLUTIONS BOT ONLINE");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor web ativo na porta ${PORT}`);
});