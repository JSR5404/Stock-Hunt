const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    getStock: [Stock]
    addUser(
      username: String!
      password: String!
    ): Auth
    login(username: String!, password: String!): Auth
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Stock {
    _id: ID
    ticker: String
    position: String
    quantity: Int
    price: Float

  }
`;

module.exports = typeDefs;
