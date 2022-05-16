import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));
app.use(express.json());

//Seteo de cookie antes de responder al cliente
app.get('/set-normal-cookie', (req, res) => {
  res.cookie('idioma', 'ingles').json({ msg: 'OK' });
});

//Seteo de cookie firmada antes de responder al cliente
app.get('/set-signed-cookie', (req, res) => {
  res.cookie('idioma', 'ingles', { signed: true }).json({ msg: 'OK' });
});

//Seteo de cookie con tiempo de expiracion
app.get('/set2', (req, res) => {
  try {
    res.cookie('server2', 'express2', { maxAge: 5000 }).send({ msg: 'OK' });
  } catch (err) {
    res.send(err);
  }
});

//Lectura de cookies
app.get('/get-cookies', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send({
    cookies: req.cookies,
    signedCookies: req.signedCookies,
  });
});

//Ejemplo de uso de las cookies
app.get('/saludo', (req, res) => {
  console.log(req.cookies.signed);
  console.log(req.cookies);
  const mensage = req.cookies.idioma == 'ingles' ? 'Hello!' : 'Hola papa!';
  res.send({ msg: mensage });
});

//Limpieza de cookies
app.get('/clr', (req, res) => {
  const cookies = req.cookies;

  console.log(cookies);

  const keys = Object.keys(cookies);

  keys.forEach((aKey) => res.clearCookie(aKey));

  res.send({ msg: 'Cookie Clear' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
