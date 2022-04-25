const Discord = require("discord.js");

const Client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS
  ],
});

// Etre sur le bon serveur
const channel = Client.channels.cache.get("mettre l'ID de son channel ici");

// Je définis un préfixe pour les futures commandes
const prefix = "!";

// Test bot
Client.once("ready", () => {
  console.log("bot opérationnel");
});



// Si quelqu'un écrit "!modérateurListe" alors...
Client.on("message", (message) => {
  if (message.content === prefix + "modérateurListe") {
    // ...trouve et récupére la liste des membres modérateurs
    message.guild.roles.cache
      .find("name", "modérateur")
      .members.map((member) => {
        message.channel.send(member.user.username);
      });
  // Si quelqu'un écrit "!membreListe" alors...
  } else if (message.content === prefix + "membreListe") {
    // ...trouve et récupére la liste des autres membres
    message.guild.roles.cache.find("name", "membre").members.map((member) => {
      message.channel.send(member.user.username);
    });
  }
});

// Token de mon bot
Client.login("mettre le token de son bot");
