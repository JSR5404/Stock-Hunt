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

  type Stock {
    _id: ID
    ticker: String
    position: String
    quantity: Int
    price: Float

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
    getStock: [Stock]
    users: [User]
    user(username: String!): User
  }

 
`;

module.exports = typeDefs;
