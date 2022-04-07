const socket = io.connect();

const form = document.getElementById('form');
const author = document.getElementById('username')
const text = document.getElementById('texto')


form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const mensaje = {
    author: author.value,
    text: text.value,
  };

  author.value = '';
  text.value = '';

  socket.emit('message', mensaje)

  console.log(mensaje);
});


socket.on('response', (data) => {
    alert(JSON.stringify(data))
})

socket.on('notificacion', (data) => {
    console.log(data)
})