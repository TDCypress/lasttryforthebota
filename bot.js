const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send("u dont have premission");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : message send to`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : RafeekEhab`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : RafeekEhab ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`made by Cypress`,"")
});


client.login("NjUzNzAxMjgwMzYyOTIyMDQ1.Xe7Zfw.EJvgWEKSJE-JGLLrjXM70mMW7zA");
