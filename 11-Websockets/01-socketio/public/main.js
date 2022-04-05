const socket = io.connect();

function addMessage(e) {
  console.log('LLAMANDO A ADD MESSAGE');
  var mensaje = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value,
  };

  socket.emit('new-message', mensaje);
  return false;
}

function render(data) {
  var html = data
    .map(function (elem, index) {
      return `<div>
                 <strong>${elem.author}</strong>:
                 <em>${elem.text}</em>
        </div>`;
    })
    .join(' ');

  document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function (data) {
  console.log('RECIBI MENSAJE');
  alert(JSON.stringify(data));
  render(data);
});
