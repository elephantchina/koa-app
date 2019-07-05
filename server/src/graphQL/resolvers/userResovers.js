const userResolvers = {
  Query: {
    hello: () => 'Hello world!',
    userList: async (parent, args, { dataSources, auth }, info) => {
      return dataSources.UserAPI.getUsers(auth);
    },
  },
};

export default userResolvers;
