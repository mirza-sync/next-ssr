import { gql } from '@apollo/client';

export const GET_FILMS = gql`
{
  allFilms{
    edges{
      node{
        id
        title
        openingCrawl
      }
    }
  }
}
`;

export const GET_FILM = gql`
query film($id: ID){
  film(id: $id){
    title
    openingCrawl
    characterConnection{
      edges{
        node{
          id
          name
        }
      }
    }
  }
}
`

export const GET_PEOPLES = gql`
query allPeople{
  allPeople{  
    edges{
      node{
        id
        name
        homeworld{
          name
        }
        filmConnection{
          edges{
            node{
              title
            }
          }
        }
      }
    }
  }
}
`

export const GET_RAKITA_USER_DETAILS = gql`
query getMyDetails{
	me{
    firstName
    lastName
    profilePicture
  }
}
`