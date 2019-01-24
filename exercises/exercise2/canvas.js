window.createCanvasControl = elementId => {
  let canvas;
  let context;
  let isDrawing;
  let lastDrawPosition;
  let width;
  let height;
  let drawHandler;
  let type = 'line';

  const setup = () => {
    canvas = document.getElementById(elementId);
    width = canvas.width = canvas.clientWidth;
    height = canvas.height = canvas.clientHeight;
    context = canvas.getContext('2d');
    context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.lineJoin = 'round';
    context.lineWidth = 2;
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mousemove', mouseMove);
  };

  const clear = () => {
    context.clearRect(0, 0, width, height);
  };

  const mouseDown = e => {
    isDrawing = true;
    mouseMove(e);
  };

  const mouseMove = e => {
    if (!isDrawing) {
      return;
    }
    if (type === 'line') {
      drawPixel(e.offsetX, e.offsetY);
    }
    lastDrawPosition = [e.offsetX, e.offsetY];
  };

  const mouseUp = e => {
    isDrawing = false;
    lastDrawPosition = null;
    switch (type) {
      case 'circle':
        drawCircle(
          {
            x: e.offsetX,
            y: e.offsetY,
            radius: 20,
            color: context.strokeStyle
          },
          true
        );
        break;
      case 'square':
        drawSquare(
          {
            x: e.offsetX,
            y: e.offsetY,
            height: 30,
            width: 30,
            color: context.strokeStyle
          },
          true
        );
        break;
      default:
        break;
    }
  };

  const drawPixel = (x, y) => {
    const lastPosition = lastDrawPosition || [x - 1, y - 1];
    drawLine(
      {
        from: { x: lastPosition[0], y: lastPosition[1] },
        to: { x, y },
        color: context.strokeStyle
      },
      true
    );
  };

  const createDraw = (drawFunc, type) => (command, fireEvent = false) => {
    const color = context.strokeStyle;
    context.strokeStyle = command.color;
    context.fillStyle = command.color;
    drawFunc(command);
    context.strokeStyle = color;
    context.fillStyle = color;
    fireEvent && drawHandler && drawHandler({ type, ...command });
  };

  const drawLine = createDraw(command => {
    context.beginPath();
    context.moveTo(command.from.x, command.from.y);
    context.lineTo(command.to.x, command.to.y);
    context.stroke();
  }, 'line');

  const drawCircle = createDraw(command => {
    context.beginPath();
    context.arc(command.x, command.y, command.radius, 0, 2 * Math.PI);
    context.fill();
  }, 'circle');

  const drawSquare = createDraw(command => {
    context.beginPath();
    context.rect(
      command.x - command.width / 2,
      command.y - command.width / 2,
      command.width,
      command.height
    );
    context.fill();
  }, 'square');

  const setColor = newColor => (context.strokeStyle = newColor);

  const setType = newType => (type = newType);

  const addDrawHandler = handler => (drawHandler = handler);

  setup();

  return {
    clear,
    setColor,
    setType,
    drawLine,
    drawCircle,
    drawSquare,
    addDrawHandler
  };
};
