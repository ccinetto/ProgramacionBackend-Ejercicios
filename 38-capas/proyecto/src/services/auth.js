import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/user';
import {
  validateNewUser,
  getUserByEmail,
  createUser,
} from '../controllers/users';
import Logger from './logger';

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
};

const login = async (req, username, password, done) => {
  Logger.info('LOGINNN');
  const user = await getUserByEmail(username);

  if (!user || !user.isValidPassword(password)) {
    return done(null, false, { message: 'Invalid Username/Password' });
  }
  Logger.info('SALIO TODO BIEN');
  return done(null, user);
};

const signup = async (req, username, password, done) => {
  try {
    Logger.info('ENTRE');
    Logger.info(req.body);
    const { firstName, lastName, age, admin, address } = req.body;

    // Nota: Username y password no se verifica porque ya lo hace passport.
    if (validateNewUser(req.body)) {
      Logger.error('Invalid body fields');
      return done(null, false, { message: 'Invalid Body Fields' });
    }

    const user = await getUserByEmail(username);

    if (user) {
      Logger.error('User already exists');
      return done(null, false, { message: 'User already exists' });
    } else {
      const userData = {
        email: username,
        password,
        firstName,
        lastName,
        age,
        admin,
        address,
      };

      const newUser = await createUser(userData);

      return done(null, newUser);
    }
  } catch (error) {
    done(error);
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
  Logger.info('Se Ejecuta el serializeUser');
  //Notar que vamos a guardar en req.session.passport el id del usuario. nada mas
  done(null, user._id);
});

/**
 * DeserializeUser Permite tomar la info que mandamos con el serializeUser para crear el objeto req.user
 */
passport.deserializeUser((userId, done) => {
  console.log('HOLAAAA\n\n\n\n\n');
  Logger.info('Se Ejecuta el desserializeUser');
  //Notar que recibimos el userId en la funcion (que es lo que mandamos en el done del serializedUser)
  //Buscamos el usuario con ese id y lo retornamos. El resultado va a estar en req.user
  UserModel.findById(userId).then((user) => {
    return done(null, user);
  });
});
