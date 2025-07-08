'use client'

import { GET_POKEMONS_LIST } from '@/graphql/queries'
import { usePokemonStore } from '@/store/pokemonStore'
import { extractId, firstLetterUpper, formatWithLeadingZeros } from '@/utils/utilityFunctions'
import { useQuery } from '@apollo/client'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import { useTheme } from 'styled-components'


export function PokemonList({ onClick }: { onClick: () => void }) {
    const setCurrent = usePokemonStore((s) => s.setCurrent)
    const current = usePokemonStore((s) => s.current)
    const search = usePokemonStore((s) => s.search)

    const theme = useTheme()

    const { data, loading } = useQuery(GET_POKEMONS_LIST, {
            variables: { limit: 1025, offset: 0 },
        })


   const list = data?.pokemons.results ?? []

  const filtered = list.filter((p: any) => {
    if (!search) return true                 
    const id = p.id ?? extractId(p.url)
    return (
      p.name.includes(search.toLocaleLowerCase()) ||
      id.toString().startsWith(search)
    )
  })


    return (
        <Container onClick={onClick}>
            {
                loading ? (Array.from({ length: 15 }).map((_, index) => (<li key={index}><Skeleton width={240} height={40} baseColor={`${theme.name === 'dark' ? '#242424' : '#DD4B4A'}`} highlightColor="#fff" /></li>)) ||  <Skeleton width={240} height={40} baseColor="#00B4EC" highlightColor="#ffffff" />) :
                (
                    filtered?.map((pokemon: any, index: number) => (<li key={index} className={`${pokemon.name === current.name ? 'selected' : {}}`} onClick={() => setCurrent({name:pokemon.name, index: pokemon.id - 1})}><p>#{formatWithLeadingZeros(pokemon.id)} - {firstLetterUpper(pokemon.name)}</p></li>))
                )
            }
        </Container>
    )
}

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 70%;
    overflow-y: auto;
    overflow-x: hidden;
    li{
        p{
            font-size: clamp(1rem, 1.03vw, 5rem);
            line-height: 39px;
        }
        color: #fff;
        cursor: pointer;
    }
    .selected{
        font-weight: 800;
        text-decoration: underline;
    }
`
