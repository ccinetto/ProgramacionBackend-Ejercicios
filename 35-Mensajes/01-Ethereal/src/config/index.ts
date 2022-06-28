import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  ETHEREAL_EMAIL: process.env.ETHEREAL_EMAIL || 'email@ethereal.email',
  ETHEREAL_PASSWORD: process.env.ETHEREAL_PASSWORD || 'password',
  ETHEREAL_NAME: process.env.ETHEREAL_NAME || 'ethereal owner name',
};
