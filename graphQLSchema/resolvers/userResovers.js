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
    userList: async () => {
      const findResult = await User.find((err, user) => {
        if (err) return console.error(err);
        delete user.password;
        return user;
      });
      return findResult || [];
    },
  },
};

export default userResolvers;
