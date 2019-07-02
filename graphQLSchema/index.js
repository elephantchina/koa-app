import { gql } from 'apollo-server-koa';

// from an existing data source like a REST API or database.
const user = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    name: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    name: 'Michael Crichton',
  },
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  # type user
  type User {
    title: String
    name: String
  }

  type Query {
    #  测试hello
    hello: String
    user: [User]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: () => user,
  },
};

export { typeDefs, resolvers };
