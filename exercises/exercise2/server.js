const express = require('express');
const expressWs = require('express-ws');
const expressWss = expressWs(express());
const app = expressWss.app;
const websockets = expressWss.getWss('/update');

// sends the given message to all connected clients
const sendToAllClients = message =>
  websockets.clients.forEach(c => c.send(message));

// keep a message history
const history = [];

// when each new client connects, send them the history of all messages up to this point
// so they can catch up
websockets.on('connection', client => history.forEach(m => client.send(m)));

app.ws('/update', ws => {
  ws.on('message', message => {
    history.push(message);
    // broadcast the message to all the clients
    sendToAllClients(message);
  });
});

app.listen(8080, () => console.log('Listening on port 8080'));
