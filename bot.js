//const Discord = require("discord.js");
//const client = new Discord.Client();
const Commando = require('discord.js-commando');
const config = require("./config.json");
const path = require('path');
const client = new Commando.CommandoClient({
  owner: '551959276097241089',
  commandPrefix: config.prefix
})

client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.users.cache.size} servidores`);
    //client.users.setGame(`Eu estou em ${client.guilds.size} servidores`);
    client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
      ['economia', 'Commands for the economy system'],
      ['giveaway', 'Commands to manage giveaways'],
      ['games', 'Commands to handle games'],
    ])
    .registerCommandsIn(path.join(__dirname, 'cmds'));
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no sevidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id:${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  if(comando === "lista"){
    message.reply('\nDigite "!"+"o audio que desejar"\n1. tome\n2. queisso \n3. cavalo\n4. paulin\n5. pele\n6. gardenal');  
}


 


});

client.login(config.token); 