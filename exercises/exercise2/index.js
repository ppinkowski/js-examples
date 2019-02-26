let socket;

function addScript() {
  const script = document.createElement('script');
  script.src = './exercise2.js';
  document.head.appendChild(script);
}

window.sendToServer = message => socket.send(JSON.stringify(message));

window.addServerMessageHandler = messageHandler => {
  // check if websocket has already been created
  if (socket) {
    return;
  }
  socket = new WebSocket(`ws://${window.location.hostname}:8080/update`);
  socket.onmessage = function() {
    // call messageHandler with parsed data from server
    messageHandler(JSON.parse(event.data));
  };
};

window.onload = async () => {
  addScript();
};
