const boton = document.getElementById('boton');
const nombre = document.getElementById('name');
const precio = document.getElementById('price');

console.log(boton);

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

boton.addEventListener('click', async () => {
  try {
    const data = {
      nombre: nombre.value,
      precio: precio.value,
    };

    boton.reset()
    const url = 'http://localhost:8080/api/productos';
    response = await postData(url, data);

    console.log(response);
  } catch (err) {
    console.log(err);
  }
});
