import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

const mySecret = 'mySecret';
app.use(cookieParser(mySecret));

app.use(express.json());

app.post('/cookies', (req, res) => {
  let { key, value, tiempo, signed } = req.body;
  console.log(key, value, tiempo, signed);

  const options = {}

  if(tiempo)
    options.maxAge = parseInt(tiempo);

  if(signed)
    options.signed = signed;

  console.log(options);
  if (key && value) {
    res.cookie(key, value, options).send({ proceso: 'ok' });
  } else {
    res.status(400).send({ error: 'set-cookie: falta key o value' });
  }
});

app.get('/cookies', (req, res) => {
  res.json({
    normales: req.cookies,
    firmadas: req.signedCookies
  });
});

app.delete('/cookies/:cookieKey', (req, res) => {
  let { cookieKey } = req.params;

  res.clearCookie(cookieKey).send({ proceso: 'ok' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
