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
    query getStock {
        getStock {
            _id
            ticker
            position
            quantity
            price
        }
    }
`;
