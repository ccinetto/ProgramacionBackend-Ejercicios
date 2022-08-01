//3
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: '{ getMessage }' }),
})
  .then((r) => r.json())
  .then((data) => {
    alert(`Ejemplo 3 = ${JSON.stringify(data)}`);
  })
  .catch(console.error);
