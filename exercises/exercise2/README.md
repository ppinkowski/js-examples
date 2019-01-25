# Exercise 2

Given a canvas control and a basic server setup, create a shared canvas, so that multiple people can simultaneously draw on the same instance.

## Client

The canvas control can be created using `createCanvasControl('canvas');`

This will return a canvas object that has the following methods:

- `clear()`  
  Clears the canvas
- `setColor(color)`  
  Sets the given color on the canvas (either a hex code or 'red', 'green' etc.)
- `setType(type)`  
  Sets the type of element that is being drawn on the canvas. Supports `'line'`, `'circle'` and `'square'`
- `drawLine(command)`  
  Draws a line on the canvas. The command is of the format:
  ```javascript
  { from: { x: number, y: number }, to: { x: number, y: number } color: string }
  ```
- `drawCircle(command)`  
  Draws a circle on the canvas. The command is of the format:
  ```javascript
  { x: number, y: number, radius: number, color: string }
  ```
- `drawSquare(command)`  
  Draws a square on the canvas. The command is of the format:
  ```javascript
  { x: number, y: number, width: number, height: number, color: string }
  ```
- `addDrawHandler(handler)`  
  Adds a callback handler to the canvas that is fired whenever something is drawn on the canvas. `handler` should be a function that takes one argument. It will be passed the command that was executed in the same format as above.

To commnunicate with the server, the following methods are available:

- `sendToServer(message)`  
  Sends the given message to the server
- `addServerMessageHandler(handler)`  
  Adds a handler to recieve messages from the server. The handler callback function should take one argument, which will be the message recieved from the server

## Server

The server (in `server.js`) has a message handler setup to receive messages from the client. You must decide what to do with the message.

A `sendToAllClients(message)` function is available which will broadcast the given message to all connected clients.
