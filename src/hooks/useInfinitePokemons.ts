import { useQuery } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { GET_POKEMONS } from '@/graphql/queries'

const PAGE = 30

export const useInfinitePokemons = () => {
  const { data, loading, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit: PAGE, offset: 0 },
    notifyOnNetworkStatusChange: true,
  })

  const pokemons = data?.pokemons.results ?? []

  const loadMore = useCallback(() => {
    return fetchMore({
      variables: { offset: pokemons.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return {
          pokemons: {
            ...fetchMoreResult.pokemons,
            results: [...prev.pokemons.results, ...fetchMoreResult.pokemons.results],
          },
        }
      },
    })
  }, [fetchMore, pokemons.length])

  const hasMore = useMemo(
    () => pokemons.length < (data?.pokemons.count ?? Infinity),
    [pokemons.length, data],
  )

  return { pokemons, loading, loadMore, hasMore }
}