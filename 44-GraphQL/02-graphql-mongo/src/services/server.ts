import express from 'express';
import * as http from 'http';
import { graphqlHTTP } from 'express-graphql';
import { graphQLMainSchema } from './graphql';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphQLMainSchema,
    graphiql: true,
  })
);
app.use(express.json());

const HTTPServer = http.createServer(app);

export default HTTPServer;
