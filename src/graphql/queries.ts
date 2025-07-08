import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      image
      dreamworld
      artwork
    }
  }
}
`

export const GET_POKEMONS_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      id
      name
    }
  }
}
`

export const GET_POKEMON = gql`
  query GetPokemonDetail($name: String!) {
  pokemon(name: $name) {
    id
    name
    types {
      type {
        name
      }
    }
     species {
      name
      url          
    }
    height
    weight
    stats {
      stat {
        name
      }
      base_stat
    }
  }
}
`

export const GET_EVOLUTION = gql`
  query GePokemonEvolution($id: String!) {
    evolutionChain(id: $id) {
      response
    }
}
`


