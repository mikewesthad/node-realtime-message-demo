var socket = io();

socket.on("connect", function() {
	console.log("Connected to socket server!");
});

var form = document.querySelector("form");
// You can get access to elements within a form by using their name
var messageInput = form.elements["message"];

form.addEventListener("submit", function (event) {
	// Prevent the default submit behavior (e.g. refreshing the page)
	event.preventDefault();

	// Do whatever you want with the input here
	var message = messageInput.value;
	
	// Then when you are ready, send the message to the server. The first 
	// parameter is the name of the custom event. The second parameter is what
	// data you want to send along - it can be a string, number, object, etc.
	socket.emit("message", message);
});
