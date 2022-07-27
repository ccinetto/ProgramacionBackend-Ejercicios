import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import mainRouter from '../routes/index';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto de Cristian con Swagger',
      version: '0.0.1',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Cristian',
        url: 'https://logrocket.com',
        email: 'cristiancinetto@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['src/routes/*'],
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use('/api', mainRouter);

export default app;
