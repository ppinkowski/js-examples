// Create our custom canvas control
const canvas = createCanvasControl('canvas');

// Task 1: Add event listeners for each button. (Look in index.html to see button ids)

// Add a callback handler for the command draw event, simply send the command to the server
canvas.addDrawHandler(function(command) {
  // Task 2: do something with canvas command
});

// add a message handler for messages recieved from the server
addServerMessageHandler(function(message) {
  // Task 3: do something with received server message
});
