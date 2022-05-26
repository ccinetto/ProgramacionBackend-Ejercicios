import util from 'util';
import passport from 'passport';
import { Router } from "express";

const router = Router();

const passportOptions = { };

const isLoggedIn = (req, res, next) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' });

  next();
}

const isAdmin = (req, res, done) => {
  console.log('Is Admin Middleware')
  console.log(req.user)

  if (!req.user.admin) return res.status(401).json({ msg: 'Unathorized - Admin Only' });

  done();
};

router.post('/signup', (req, res, next) => {
  passport.authenticate('signup', passportOptions, (err, user, info) => {
    console.log('Info SIGNUP');
    console.log(err, user, info);
    if (err) {
      return next(err);
    }
    if (!user) return res.status(401).json(info);

    res.json({ msg: 'signup OK' });
  })(req, res, next);
});


router.post(
  '/login',
  passport.authenticate('login', passportOptions),
  (req, res) => {
    res.json({ msg: 'Welcome!', user: req.user });
  },
);


router.get('/', isLoggedIn, isAdmin, async (req, res) => {
  console.log(util.inspect(req.session, true, 7, true));
  res.json({
    mgs: "HOLA",
    session : req.session,
    user: req.user
  })
})

export default router;