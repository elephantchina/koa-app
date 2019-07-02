import userTypeDefs from './typeDefs/userTypeDefs';
import userResolvers from './resolvers/userResovers';


// Construct a schema, using GraphQL schema language
const typeDefs = [userTypeDefs];

// Provide resolver functions for your schema fields
const resolvers = [userResolvers];

export { typeDefs, resolvers };
