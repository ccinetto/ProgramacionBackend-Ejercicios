import { Router } from 'express';
const router = Router();

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

router.get('/', (req, res) => {
  res.send('Servidor express ok!');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const index = users.findIndex((aUser) => aUser.username === username && aUser.password === password);

  if(index < 0)
    res.status(401).json({ msg: 'no estas autorizado' });
  else {
    const user = users[index];
    req.session.info = {
      loggedIn: true,
      contador : 1,
      username : user.username,
      admin : user.admin,
    };
    res.json({msg: 'Bienvenido!!'})
  }
});

const validateLogIn = (req, res, next) => {
  if (req.session.info && req.session.info.loggedIn) next();
  else res.status(401).json({ msg: 'no estas autorizado' });
};

router.get('/secret-endpoint', validateLogIn, (req, res) => {
  req.session.info.contador++;
  res.json({
    msg: `${req.session.info.username} ha visitado el sitio ${req.session.info.contador} veces`,
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send('Logout ok!');
    else res.send({ status: 'Logout ERROR', body: err });
  });
});

router.get('/info', validateLogIn, (req, res) => {
  res.send({
    session: req.session,
    sessionId: req.sessionID,
    cookies: req.cookies,
  });
});

export default router;
