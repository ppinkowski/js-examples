const canvas = createCanvasControl('canvas');

// Add a callback handler for the command draw event, simply send the command to the server
canvas.addDrawHandler(command => {
  // TODO: something with canvas command
});

// add a message handler for messages recieved from the server
addServerMessageHandler(message => {
  // TODO: something with message
});
