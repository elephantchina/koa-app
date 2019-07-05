import Schema from './schema/schema';
import Resolvers from './resolvers/userResovers';

// Construct a schema, using GraphQL schema language
const typeDefs = [Schema];

// Provide resolver functions for your schema fields
const resolvers = [Resolvers];

export { typeDefs, resolvers };
