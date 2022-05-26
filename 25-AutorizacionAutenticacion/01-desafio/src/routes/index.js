import { Router } from 'express';
import path from 'path';

const router = Router();

let usuarios = [
  { nombre: 'pepe', password: 'bokitaTheBiggest' },
  { nombre: 'jacinto', password: 'mipassword123' },
];

router.get('/', (req, res) => {
  console.log(`SESSION =>${JSON.stringify(req.session)}`);
  if (req.session.nombre) {
    res.redirect('/datos');
  } else {
    res.render('login');
  }
});

/* --------- LOGIN ---------- */
router.get('/login', (req, res) => {
  res.render('login')
});

/* --------- REGISTER ---------- */
router.get('/register', (req, res) => {
  const registerPath = path.resolve(__dirname, '../public/register.html');
  res.render('register');
});


router.post('/login', (req, res) => {
  let { nombre, password } = req.body;
  //console.log(usuarios)
  //console.log(req.body)
  let credencialesOk = usuarios.filter(
    (usuario) => usuario.nombre == nombre && usuario.password == password
  ).length;
  if (credencialesOk) {
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/datos');
  } else {
    res.render('login-error', {});
  }
});


router.post('/register', (req, res) => {
  let { nombre } = req.body;
  let encontrado = usuarios.filter(
    (usuario) => usuario.nombre == nombre
  ).length;
  if (!encontrado) {
    usuarios.push(req.body);
    req.session.nombre = nombre;
    req.session.contador = 0;
    res.redirect('/');
  } else {
    res.render('register-error', {});
  }
});

/* --------- DATOS ---------- */
router.get('/datos', (req, res) => {
  if (req.session.nombre) {
    req.session.contador++;
    res.render('datos', {
      datos: usuarios.find((usuario) => usuario.nombre == req.session.nombre),
      contador: req.session.contador,
    });
  } else {
    res.redirect('/login');
  }
});

/* --------- LOGOUT ---------- */
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

export default router;
