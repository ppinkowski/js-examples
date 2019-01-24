const canvas = createCanvasControl('canvas');

const id = Math.random().toString();

['red', 'green', 'blue'].map(b =>
  document.getElementById(b).addEventListener('click', () => canvas.setColor(b))
);

['line', 'circle', 'square'].map(b =>
  document.getElementById(b).addEventListener('click', () => canvas.setType(b))
);

canvas.addDrawHandler(e => {
  sendToServer({ id, command: e });
  console.log(e);
});

addServerMessageHandler(m => {
  if (m.id !== id) {
    canvas.drawPixel(m.command);
  }
});
