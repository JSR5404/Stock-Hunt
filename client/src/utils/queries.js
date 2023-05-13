import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUser($username: String) {
        user(username: $username) {
            _id
            username
            password
        }
    }
`;

export const GET_STOCK = gql`
    query GetStock($stock: String) {
        getStock {
            ticker
            position
            quantity
            price
        }
    }
`;