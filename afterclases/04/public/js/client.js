const table = document.getElementById('myTable');
const submitButton = document.getElementById('Submit');
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const socket = io();

socket.emit('allProducts');

socket.on('producto', (unProducto) => {
  attachRow(unProducto);
});

const attachRow = (unProducto) => {
  const fila = document.createElement('tr');
  fila.innerHTML = `<td>${unProducto.id}</td><td>${unProducto.nombre}</td> <td>${unProducto.precio}</td>`;

  table.appendChild(fila);
};

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('CLICK!');
  try {
    const data = {
      nombre: nombre.value,
      precio: precio.value,
    };

    const url = 'http://localhost:8080/api/productos';
    response = await postData(url, data);

    console.log(response);
  } catch (err) {
    console.log(err);
  }
});
