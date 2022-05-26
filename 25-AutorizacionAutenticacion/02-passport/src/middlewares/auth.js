export const isLoggedIn = (req, res, done) => {
  console.log('Is Authenticated')
  console.log(req.isAuthenticated())
  if (!req.isAuthenticated()) return res.status(401).json({ msg: 'Unathorized' });

  done();
};

export const isAdmin = (req, res, done) => {
  console.log('Is Admin Middleware')
  console.log(req.user)

  if (!req.user.admin) return res.status(401).json({ msg: 'Unathorized - Admin Only' });

  done();
};