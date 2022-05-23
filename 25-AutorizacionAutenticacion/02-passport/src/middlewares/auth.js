export const isLoggedIn = (req, res, done) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated())
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' });

  done();
};
