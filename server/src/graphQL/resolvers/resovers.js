import { Query as UserResolvers } from './userResovers';

const Resolvers = {
  Query: {
    ...UserResolvers,
  },
};

export default Resolvers;
