import User from '../../models/User';

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

const userResolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: () => user,
    userList: async (parent, args, context, info) => {
      console.log(context);
      const findResult = await User.find((err, user) => {
        if (err) return console.error(err);
        delete user.password;
        return user;
      });
      return {
        code: 1,
        success: true,
        message: 'success',
        data: findResult || [],
      };
    },
  },
};

export default userResolvers;
