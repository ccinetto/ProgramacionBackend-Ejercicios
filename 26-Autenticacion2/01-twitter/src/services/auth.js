import Config from '../config';
import passport from 'passport';
import { Strategy as PassportStrategy } from 'passport-twitter';

const passportStrategyOptions = {
  consumerKey: Config.TWITTER_APP_ID,
  consumerSecret: Config.TWITTER_APP_SECRET,
  callbackURL: 'http://localhost:8080/api/auth/twitter/callback',
  userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
  includeEmail: true,
};

const login = async (accessToken, refreshToken, profile, done) => {
  console.log('SALIO TODO BIEN');
  console.log('\n\n\nACCESS TOKEN');
  console.log(accessToken);
  console.log('\n\n\nREFRESH TOKEN');
  console.log(refreshToken);
  console.log('\n\n\nPROFILE');
  console.log(profile);
  return done(null, profile);
};

passport.serializeUser((profile, done) => {
  console.log('Se Ejecuta el serializeUser');
  done(null, profile);
});

passport.deserializeUser((profile, done) => {
  done(null, profile);
});

export const twitterLogin = new PassportStrategy(
  passportStrategyOptions,
  login,
);
