import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query getPokemons($limit: Int!, $offset: Int!) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        artwork
        types {
          name
        }
      }
    }
  }
`