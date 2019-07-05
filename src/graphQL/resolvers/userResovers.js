const userResolvers = {
  Query: {
    hello: () => 'Hello world!',
    userList: async (parent, args, { dataSources }, info) => {
      console.log(dataSources);
      return dataSources.UserAPI.getUsers();
    },
  },
};

export default userResolvers;
