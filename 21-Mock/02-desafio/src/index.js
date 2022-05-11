const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

import express from 'express';

const app = express();

const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

const devolverAleatorios = (req, res) => {
    const respuesta = [];

    for(let i =0; i<10; i++){
        respuesta.push({
            nombre: nombres[between(0, nombres.length)],
            apellido: apellidos[between(0, apellidos.length)],
            color: colores[between(0, colores.length)]
        })
    }
    res.json({
        data: respuesta
    });
}

app.get('/test', devolverAleatorios)

const puerto = 8080;
app.listen(puerto, () => console.log(`Escuchando puerto ${puerto}`))