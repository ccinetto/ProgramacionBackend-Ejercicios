import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(
  session({
    secret: 'thisismysecret',
    cookie: { maxAge: 1000 * 60 },
    saveUninitialized: true,
    resave: false,
  })
);

const users = [
  {
    username: 'pepe',
    password : 'BokitaTheBiggest',
    admin: true,
  },
  {
    username: 'juancarlos',
    password : 'BokitaTheBiggest',
    admin: false,
  }
]

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);
  console.log(index)
  if(index < 0)
    res.status(401).json({ msg: 'no estas autorizado' });
  else {
    const user = users[index];
    req.session.info = {
      loggedIn: true,
      contador : 1,
      admin : user.admin,
    };
    res.json({msg: 'Bienvenido!!'})
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ msg: 'session destruida' });
});

const validateLogIn = (req, res, next) => {
  if (req.session.info && req.session.info.loggedIn) next();
  else res.status(401).json({ msg: 'no estas autorizado' });
};

const isAdmin = (req, res, next) => {
  if (req.session.info && req.session.info.admin) next();
  else res.status(401).json({ msg: 'no estas autorizado' });
};

app.get('/secret-endpoint', validateLogIn, (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: 'informacion super secreta',
    contador: req.session.info.contador,
    session: req.session
  });
});

app.get('/admin-secret-endpoint', validateLogIn, isAdmin, (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: 'informacion super secreta de admins',
    contador: req.session.info.contador,
    session: req.session
  });
});

app.listen(8080, () => console.log(`Escuchando puerto 8080`));
