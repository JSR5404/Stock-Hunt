const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { Stock } = require('../models');

const resolvers = {

  Query: {

    getStock: async () => {
      try {
        let allStocks = await Stock.find()
        console.log(allStocks);
        return allStocks
      } catch (error){
        console.log(error);
      }
     },

  },

  Mutation: {

    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      console.log(username, password);
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};



module.exports = resolvers;
