//EJECUTAR CON EL COMANDO
// deno run fileName.ts

//Podemos correr lint ejecutando el comando
//deno lint fileName.ts

const sayHelloTo = (name: string): string => {
  const variable = 'pepe';
  return `Hello ${name} !`;
};

console.log(sayHelloTo('Coderhouse!'));
