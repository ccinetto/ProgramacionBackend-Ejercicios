/**
 * https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [
    {
      name: 'app1',
      script: 'dist/index.js',
      watch: true,
      autorestart: true,
      // instances: 4,
      args: '--puerto=3001',
    },
    {
      name: 'app2',
      script: 'dist/index.js',
      watch: true,
      autorestart: true,
      // instances: 4,
      args: '--puerto=3002',
    },
    {
      script: './service-worker/',
      watch: ['./service-worker'],
    },
  ],
};
