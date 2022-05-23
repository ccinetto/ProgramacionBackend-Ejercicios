import passport from 'passport';
import { Router } from 'express';
import { isLoggedIn } from '../middlewares/auth';
import UserRouter from './user';

const router = Router();

const passportOptions = { badRequestMessage: 'Falta username / password' };
router.post(
  '/login',
  passport.authenticate('login', passportOptions),
  function (req, res) {
    res.json({ msg: 'Welcome!', user: req.user });
  },
);

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json({ data: info });

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});

router.post('logout', (req, res) => {
  req.logOut();
  res.json({ message: 'GoodBye!' });
});

router.get('/hello', (req, res) => {
  res.json({ msg: 'HOLA', session: req.session });
});

router.use('/user', isLoggedIn, UserRouter);

export default router;
