import util from 'util';
import passport from 'passport';
import { Router } from "express";
import { isLoggedIn } from '../middlewares';
const router = Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/api/datos',
    failureRedirect: '/api/fail',
  }),
);

router.get('/fail', (req, res) => {
  res.render('login-error');
});

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/api/login');
  });
});

router.get('/info', (req, res) => {
  res.json({
    session: req.session,
  })
})

router.get('/datos', isLoggedIn, async (req, res) => {
  let foto = 'noPhoto';
  let email = 'noEmail';

  const userData = req.user;

  //reinicio contador
  if (!userData.contador) userData.contador = 0;
  userData.contador++;

  if (userData.photos) foto = userData.photos[0].value;

  if (userData.emails) email = userData.emails[0].value;

  res.render('datos', {
    nombre: userData.displayName,
    contador: userData.contador,
    foto,
    email,
  });
})

export default router;