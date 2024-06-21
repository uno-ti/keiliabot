const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'; // 任意のプレフィックス

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content.startsWith(prefix) && !msg.author.bot) {
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
      msg.reply('Pong!');
    } else if (command === 'hello') {
      msg.channel.send(`Hello, ${msg.author.username}!`);
    }
    // 他のコマンドをここに追加できます
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');
