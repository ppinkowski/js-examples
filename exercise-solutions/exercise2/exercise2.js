const canvas = createCanvasControl('canvas');

const LINE = 'line';
const CIRCLE = 'circle';
const SQUARE = 'square';

// create a client ID to identify messages
const clientId = Math.random().toString();

// create a base prototype object to run a draw command on the canvas
const drawCommandBase = {
  draw() {
    this.executeDraw(canvas);
  }
};

// create a specific command the runs the given canvas function
const createCommand = (commandData, canvasCommand) => {
  const command = Object.create(drawCommandBase);
  command.executeDraw = () => canvasCommand(commandData);
  return command;
};

// command factory to create a command for the given data
const commmandFactory = commandData => {
  switch (commandData.type) {
    case LINE:
      return createCommand(commandData, canvas.drawLine);
    case CIRCLE:
      return createCommand(commandData, canvas.drawCircle);
    case SQUARE:
      return createCommand(commandData, canvas.drawSquare);
  }
};

// Add event handlers for the color buttons
['red', 'green', 'blue'].forEach(id =>
  document
    .getElementById(id)
    .addEventListener('click', () => canvas.setColor(id))
);

// Add event handlers for the type buttons
[LINE, CIRCLE, SQUARE].forEach(id =>
  document
    .getElementById(id)
    .addEventListener('click', () => canvas.setType(id))
);

// Add a callback handler for the command draw event, simply send the command to the server
canvas.addDrawHandler(command => sendToServer({ clientId, command }));

// add a message handler for messages recieved from the server
addServerMessageHandler(message => {
  // ignore our own messages
  if (message.clientId !== clientId) {
    // create a command from the message data
    const command = commmandFactory(message.command);
    command.draw();
  }
});
