import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../model/user';

const strategyOptions = {
  usernameField: 'usuario',
  passwordField: 'contrasena',
  passReqToCallback: true,
};

const login = async (req, username, password, done) => {
  console.log('LOGIN!!');
  const user = await UserModel.findOne({ username, password });

  if (!user) return done(null, false, { mensaje: 'Usuario no encontrado' });

  console.log('ENCONTRE UN USUARIO');
  return done(null, user);
};

const signup = async (req, username, password, done) => {
  console.log('SIGNUP!!');
  try {
    const newUser = await UserModel.create({ username, password });
    return done(null, newUser);
  } catch (err) {
    console.log('Hubo un error!');
    console.log(err);
    return done(null, false, { mensaje: 'Error Inesperado', err });
  }
};

export const loginFunc = new LocalStrategy(strategyOptions, login);
export const signUpFunc = new LocalStrategy(strategyOptions, signup);


/**
 * Express-session crea un objeto session en la request
 * passport agrega a req.session un objeto llamado passport para guardar la info del usuario
 * Cuando llamamos a done en login o en signup y pasamos el usuario lo siguiente que ocurre es que se ejecuta passport.serializeUser
 * Esta funcion agarra el usuario que recibio y lo guarda en req.session.passport 
 * En este caso estamos creando una key llamado user con la info del usuario dentro de req.session.passport
 */
 passport.serializeUser((user, done) => {
  console.log('Se Ejecuta el serializeUser');
  done(null, user._id);
});

/**
 * DeserializeUser Permite tomar la info que mandamos con el serializeUser para hacer algun extra de busqueda de informacion
 */
 passport.deserializeUser((userId, done) => {
  console.log('Se Ejecuta el desserializeUser');
  UserModel.findById(userId).then((user) => {
    return done(null, user);
  })
});