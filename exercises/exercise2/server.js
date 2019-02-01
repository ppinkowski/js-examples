const express = require('express');
const expressWs = require('express-ws');
const expressWss = expressWs(express());
const app = expressWss.app;
const websockets = expressWss.getWss('/update');

// sends the given message to all connected clients
const sendToAllClients = message =>
  websockets.clients.forEach(c => c.send(message));

websockets.on('connection', client => {
  // do something with client
});

const history = [];

app.ws('/update', ws => {
  ws.on('message', message => {
    history.push(message);
    // do something with message
  });
});

app.listen(8080, () => console.log('Listening on port 8080'));
