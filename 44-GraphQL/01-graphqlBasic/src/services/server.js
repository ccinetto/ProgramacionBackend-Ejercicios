//https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphqlRoot, graphqlSchema } from './graphql';
import MainRouter from 'routes';

// Create an express server and a GraphQL endpoint
const app = express();

app.use(express.static('public'));

app.use('/api', MainRouter);

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlRoot,
    graphiql: true,
  })
);

export default app;
