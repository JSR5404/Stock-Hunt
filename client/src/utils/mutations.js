import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($tech1: String!, $tech2: String!) {
    loginUser(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($_id: String!, $techNum: Int!) {
    createUser(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
