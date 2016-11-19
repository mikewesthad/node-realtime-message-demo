var socket = io();

socket.on("connect", function() {
	console.log("Connected to socket server!");
});

socket.on("display message", function (message) {
	console.log("Message received: ", message)
});