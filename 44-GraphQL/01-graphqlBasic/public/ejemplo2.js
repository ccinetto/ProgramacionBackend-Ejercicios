//2
fetch('/graphql?query={getArrayOfMessages}')
  .then((r) => r.json())
  .then((data) => {
    alert(`Ejemplo 2 = ${JSON.stringify(data)}`);
  })
  .catch(console.error);
