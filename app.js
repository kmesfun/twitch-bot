var tmi = require('tmi.js');
//add channel name here
var channel = "";

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity:{
		username: "twitchbot",
		password: "oauth:'' "

	},
	channels: [channel]
};

var client = new tmi.client(options);
client.connect();
//template for bot replies 
// client.on("chat", function (channel, userstate, message, self) {
//     // Don't listen to my own messages..
//     if(message === "   "){
//     	client.action(channel, "emote");
//     }

// });
client.on("chat", function (channel, userstate, message, self) {
    
    if(message === "wow"){
    	client.action(channel, "PogChamp");
    }

});

client.on("cheer", function (channel, userstate, message) {
    // Do your stuff.
  
    	client.action(channel, "hi chat");
    
});

client.on("connected", function(address, port){
	client.action(channel, "Hello I am a bot");

});
