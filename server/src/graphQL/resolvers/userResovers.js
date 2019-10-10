const userResolvers = {
  Query: {
    hello: () => 'Hello world!',
    userList: async (parent, args, { dataSources, auth }, info) => {
      return dataSources.UserAPI.getUsers(auth);
    },
    user: async (parent, args, { dataSources, auth }, info) => {
      return dataSources.UserAPI.getUserOne(auth);
    },
  },
  Mutation: {
    login: async (parent, args, { dataSources }, info) => {
      return dataSources.UserAPI.userLogin(args);
    },
    addUser: async (parent, args, { dataSources }, info) => {
      return dataSources.UserAPI.addUser(args);
    },
    deleteUser: async (parent, args, { dataSources, auth }, info) => {
      return dataSources.UserAPI.deleteUser(args, auth);
    },
  },
};

export default userResolvers;
