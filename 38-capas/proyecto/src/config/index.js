import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_ATLAS_URL: process.env.MONGO_ATLAS_SRV || 'mongoSRV',
  PORT: process.env.PORT || 8080,
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY || 'shhhh',
  GMAIL_EMAIL: process.env.GMAIL_EMAIL || 'email@gmail.com',
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD || 'password',
  GMAIL_NAME: process.env.GMAIL_NAME || 'GMAIL owner name',
  TWILIO_ACCOUNT_ID: process.env.TWILIO_ACCOUNT_ID || 'twilioId',
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || 'twilioToken',
  TWILIO_CELLPHONE: process.env.TWILIO_CELLPHONE || '+123456789',
  ADMIN_PHONE: process.env.ADMIN_PHONE || '+5491166666666',
};
