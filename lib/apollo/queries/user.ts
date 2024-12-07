import { gql } from "@apollo/client";
import { USER_FRAGMENT } from "../fragments/user";

export const GQL_LOGIN_QUERY = gql`
  ${USER_FRAGMENT}
  query Login($source: String!, $password: String!) {
    login(source: $source, password: $password) {
      token
      user {
        ...UserSchema
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  ${USER_FRAGMENT}
  query GetUser($userId: ID!) {
    user(id: $userId) {
      ...UserSchema
    }
  }
`;
