const { SchemaComposer } = require('graphql-compose');
const { TaskQueries, TaskMutations } = require('../controllers/tasks');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...TaskQueries,
});

schemaComposer.Mutation.addFields({
  ...TaskMutations,
});

export const graphQLMainSchema = schemaComposer.buildSchema();
