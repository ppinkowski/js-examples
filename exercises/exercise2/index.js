let socket;

function addScript() {
  const script = document.createElement('script');
  script.src = './exercise2.js';
  document.head.appendChild(script);
}

function setupWebSocket() {
  return new Promise(res => {
    socket = new WebSocket(`ws://${window.location.hostname}:8080/update`);
    socket.onopen = res;
  });
}

window.sendToServer = message => socket.send(JSON.stringify(message));

window.addServerMessageHandler = onMessage =>
  (socket.onmessage = () => onMessage(JSON.parse(event.data)));

window.onload = async () => {
  await setupWebSocket();
  addScript();
};
