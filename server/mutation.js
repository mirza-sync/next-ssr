import { gql } from '@apollo/client';

export const LOGIN_RAKITA_USER = gql`
mutation tokenAuth($username: String!, $password: String!){
  tokenAuth(username:$username, password: $password){
    token
  }
}
`