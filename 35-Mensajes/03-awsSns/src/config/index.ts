import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 8080,
  SNS_TOPIC_ARN: process.env.SNS_ARN || 'arn:aws:sns:us-east-1:123456789:name',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'awsKey',
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'awsSecret',
  AWS_REGION: process.env.AWS_REGION || 'us-east-2',
};
