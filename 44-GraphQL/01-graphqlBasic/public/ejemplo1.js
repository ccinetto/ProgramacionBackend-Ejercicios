//1
fetch('/graphql?query={getMessage}')
  .then((r) => r.json())
  .then((data) => alert(`Ejemplo 1 = ${JSON.stringify(data)}`))
  .catch(console.error);
