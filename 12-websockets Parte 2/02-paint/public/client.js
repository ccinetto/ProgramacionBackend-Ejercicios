let mouse = {
  click: false,
  move: false,
  pos: { x: 0, y: 0 },
  pos_prev: false,
};

const canvas = document.getElementById('drawing');
const context = canvas.getContext('2d');
const resetButton = document.getElementById('reset');
const color = document.getElementById('color');

//Seteo ancho y alto del canvas al tamaño real de la pantalla
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

//Capturo evento click del usuario
canvas.addEventListener('mousedown', (e) => {
  mouse.click = true;
});

//capturo evento usuario suelta el click
canvas.addEventListener('mouseup', (e) => {
  mouse.click = false;
  mouse.move = false;
});

//capturo evento de cuando se mueve el mouse
canvas.addEventListener('mousemove', (e) => {
  //obtengo posicion relativa del mouse
  mouse.pos.x = e.clientX / width;
  mouse.pos.y = e.clientY / height;
  mouse.move = true;
});

const socket = io();

setInterval(() => {
  if (mouse.click && mouse.move && mouse.pos_prev) {
    console.log('DIBUJANDO');
    const data = {
      line: [mouse.pos, mouse.pos_prev],
      color: color.value,
    };
    socket.emit('new-line', data);
  }

  mouse.pos_prev = {
    x: mouse.pos.x,
    y: mouse.pos.y,
  };
  mouse.move = false;
}, 25);

socket.on('new-line', (data) => {
  const { line, color } = data;
  const [beginLine, endLine] = line;

  //Dibujar linea
  context.beginPath();
  context.lineWidth = 2;
  context.moveTo(beginLine.x * width, beginLine.y * height);
  context.lineTo(endLine.x * width, endLine.y * height);
  context.strokeStyle = color;
  context.stroke();
});

resetButton.addEventListener('click', (e) => {
  socket.emit('reset');
});

socket.on('reset', () => {
  console.log('RESSET');
  context.clearRect(0, 0, canvas.width, canvas.height);
});
