const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.on('ready', () => { bot.user.setActivity('!help for info') })

bot.on('message', (message) => {

if(message.content == 'Hey') {
    message.reply('Sup');
}

if(message.content == 'Lit') {
    // message.reply('af boi');
    message.channel.sendMessage('af boi');
}

if(message.content == 'What is new?') {
  // message.reply('Nothing as of 05/02/2018, This message will be updated when my creator (Koops132) Updates me :)');
  message.channel.sendMessage('Nothing as of 05/02/2018, This message will be updated when my creator (Koops132) Updates me :)');
}

})

bot.registry.registerGroup('random', 'Random')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.BOT_TOKEN);
