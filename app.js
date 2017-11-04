var tmi = require('tmi.js');

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
		password: "oauth:cfxbf5xyumejnzszg33mpcui46a3fd"

	},
	channels: ["shotochampion"]
};

var client = new tmi.client(options);
client.connect();

client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if(message === "TriHard"){
    	client.action("shotochampion", "TriHard");
    }

});

client.on("cheer", function (channel, userstate, message) {
    // Do your stuff.
  
    	client.action("shotochampion", "hihihi");
    
});

client.on("connected", function(address, port){
	client.action("shotochampion", "Hello I am a bot");

});