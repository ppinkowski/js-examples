let socket;

function addScript() {
  const script = document.createElement('script');
  script.src = './exercise2.js';
  document.head.appendChild(script);
}

function setupWebSocket(onMessage) {
  if (socket) {
    return;
  }
  socket = new WebSocket(`ws://${window.location.hostname}:8080/update`);
  socket.onmessage = onMessage;
}

window.sendToServer = message => socket.send(JSON.stringify(message));

window.addServerMessageHandler = onMessage => {
  setupWebSocket(() => onMessage(JSON.parse(event.data)));
};

window.onload = async () => {
  addScript();
};
