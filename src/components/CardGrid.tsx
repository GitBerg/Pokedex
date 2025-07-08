'use client'

import Image from 'next/image'
import { GET_POKEMONS, GET_POKEMON } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { formatWithLeadingZeros, heightToImperial, kilogramsToPounds } from '@/utils/utilityFunctions';
import { attDict, typeColors } from '@/utils/objectDictionary';
import { usePokemonStore } from '@/store/pokemonStore';
import Skeleton from 'react-loading-skeleton';
import EvolutionCard from './EvolutionCard';
import CardDescription from './DescriptionCard';
import { ToggleBtn } from './ToggleBtn';
import { useTheme } from 'styled-components'
import { RiMenuFold4Line } from "react-icons/ri";
import { Container } from '@/styles/cardGridStyles';



export default function CardGrid() {
    const theme = useTheme()

    const currentPokemon = usePokemonStore((s) => s.current)
    const navBar = usePokemonStore((s) => s.navbar)
    const setNavBar = usePokemonStore((s) => s.isOpen)


    const {
        data: pokemon,
        loading: pokemonLoading,
    } = useQuery(GET_POKEMON, {
        variables: { name: currentPokemon.name },
        skip: !currentPokemon.name,
    })


    const {
        data: pokeImg,
        loading: pokeImgLoading,
    } = useQuery(GET_POKEMONS, {
        variables: { limit: 1025, offset:0},
    })


    return (
        <Container className='scrollable'>
            <RiMenuFold4Line className={`${navBar ? 'open' : ''} menu-icon`} onClick={() => setNavBar()} />
            <section className='section-top'>
                <div className='pokemon-name'>
                    {pokemonLoading ? (<Skeleton width={200} height={50} baseColor={theme.colors.bg} highlightColor="#ffffff" />) : (<h1>#{formatWithLeadingZeros(pokemon?.pokemon?.id)} - {pokemon?.pokemon?.name.toUpperCase()}</h1>)}
                    {pokeImgLoading ? (<Skeleton width={50} height={50} baseColor={theme.colors.bg} highlightColor="#ffffff" />)
                        :
                        <Image src={pokeImg?.pokemons?.results[currentPokemon.index]?.image} alt={"Image"} style={{ width: '100px', height: '100px', transform: 'translateX(-10%)' }} width={200} height={200} />
                    }

                </div>
                <div className='toggle-theme'>
                    <ToggleBtn />
                </div>
            </section>
            <section className='section-bottom'>
                <div className='pokemon-stats'>
                    <div className='pokemon-image card'>
                        {pokeImgLoading ? (<Skeleton width={200} height={150} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)
                            : (<Image src={pokeImg?.pokemons?.results[currentPokemon.index]?.dreamworld} onError={(e) => { e.currentTarget.src = pokeImg?.pokemons?.results[currentPokemon.index]?.artwork }} alt={"Image"} width={300} height={300} priority />)
                        }
                    </div>
                    <div className='pokemon-types card'>
                        <p className='title'>Type</p>
                        {
                            pokemonLoading ? (<Skeleton width={50} height={20} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)
                                :
                                (<div className='tags'>{pokemon?.pokemon?.types.map((t: { type: { name: string } }) => <span key={t.type.name} className='tag-type' style={{ backgroundColor: `${typeColors[t.type.name] ?? "#fff"}` }}>{t.type.name.toUpperCase()}</span>)}</div>)
                        }
                    </div>
                    <div className='pokemon-infos'>
                        <div className='info card'>
                            <p className='title'>Height:</p>
                            {
                                pokemonLoading ? (<Skeleton width={50} height={20} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)
                                    :
                                    (<p className='info-stat'>{`${heightToImperial(parseInt(pokemon?.pokemon?.height))} / ${parseFloat(pokemon?.pokemon?.height) / 10} m`}</p>)
                            }
                        </div>
                        <div className='info card'>
                            <p className='title'>Weight:</p>
                            {
                                pokemonLoading ? (<Skeleton width={50} height={20} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)
                                    :
                                    (<p className='info-stat'>{`${kilogramsToPounds(pokemon?.pokemon?.weight)}lbs. / ${parseFloat(pokemon?.pokemon?.weight) / 10}Kg`}</p>)
                            }
                        </div>
                    </div>
                    <div className='pokemon-attributes card'>
                        <p className='title'>Attributes</p>
                        {pokemonLoading ? (<div className='attributes'> {Array.from({ length: 6 }).map((_, i) => <Skeleton width={"100%"} height={"100%"} key={i} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)}</div>) : (<div className='attributes'>{pokemon?.pokemon?.stats.map((a: { stat: { name: string }, base_stat: number }) => <span className='att-tag' key={a.stat.name} style={{ backgroundColor: `${attDict[a.stat.name].color}` }}>{[`${a.base_stat + " " + attDict[a.stat.name].name}`]}</span>)}</div>)}
                    </div>
                </div>
                <div className='pokemon-description'>
                    <div className='evolutions card'>
                        <p className='title'>Evolutions</p>
                        {pokemonLoading ? (
                            <div className='evolution-list'>
                                {Array.from({ length: 2 }).map((_, i) => <Skeleton width={100} height={100} key={i} baseColor={theme.colors.card} highlightColor={theme.colors.bg} />)}
                            </div>
                        ) : (
                            <EvolutionCard name={currentPokemon.name} />
                        )}
                    </div>
                    <div className='description scrollable card'>
                        <p className='title'>Description</p>
                        <CardDescription description={pokemon?.pokemon?.species?.url} />
                    </div>
                </div>
            </section>
        </Container>
    )
}

