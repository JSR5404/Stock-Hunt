import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login(
  $username: String!, 
  $password: String!
  ) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $password: String!) {
//     addUser(username: $username, password: $password) {
//       token
//       user {
//       _id
//       username
//       password
//     }
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const GET_STOCK = gql`
    mutation getStock($stock: String) {
        getStock(stock:$stock) {
            _id
            ticker
            position
            quantity
            price
        }
    }
`;

export const ADD_STOCK = gql`
  mutation addStock($ticker: String!, $position: String!, $quantity: Int!, $price: Float!) {
    addStock(ticker: $ticker, position: $position, quantity: $quantity, price: $price) {
      stock {
        _id
        ticker
        position
        quantity
        price
      }
    }
  }
`;


