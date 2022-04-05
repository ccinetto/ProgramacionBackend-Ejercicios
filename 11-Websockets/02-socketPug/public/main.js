const socket = io.connect('http://localhost:8080', { forceNew: true });

// Cuando arrancamos pedimos la data que hay actualmente enviando un socket
socket.emit('askData');

function sendData(e) {
  const input = document.getElementById('pepe');
  socket.emit('new-message', input.value);
}

function render(data) {
  console.log(data);
  var html = data
    .map(function (elem, index) {
      return `<div>
                 <strong>Socket Id: ${elem.socketId} => </strong>:
                 <em>${elem.message}</em>
        </div>`;
    })
    .join(' ');

  document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function (data) {
  console.log('RECIBI MENSAJE');
  render(data);
});
