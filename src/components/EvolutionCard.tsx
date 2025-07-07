'use client'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_POKEMON, GET_EVOLUTION } from '@/graphql/queries'
import { getEvolutionPeers } from '@/utils/getEvolutionPeers'
import Image from 'next/image'
import { firstLetterUpper } from '@/utils/utilityFunctions'
import { usePokemonStore } from '@/store/pokemonStore'

interface Props {
  name: string
}

const extractId = (url: string) =>
  url.split('/').filter(Boolean).pop() || '0'

export default function EvolutionCard({ name } : Props) {
  const [chainId, setChainId] = useState<String | null>(null)
  const setCurrent = usePokemonStore((s) => s.setCurrent)

  const { data: pokeData } = useQuery(GET_POKEMON, { variables: { name } })

  useEffect(() => {
    const speciesUrl = pokeData?.pokemon?.species?.url
    if (!speciesUrl) return
    fetch(speciesUrl)
      .then((res) => res.json())
      .then((json) => {
        const chainUrl: string = json.evolution_chain?.url
        if (chainUrl) setChainId(extractId(chainUrl))
      })
      .catch(console.error)
  }, [pokeData])

  const { data: evoData, loading: evoLoading } = useQuery(GET_EVOLUTION, {
    variables: { id: chainId },
  })

   const chainNode = evoData?.evolutionChain?.response?.chain   
   const peers =
    chainNode && name
    ? getEvolutionPeers(chainNode, name)
    : []


  return (
    <div className='evolution-list'>
      {peers.map((p) => (
        <div key={p.name} className='evolution'>
          <Image src={p.image} onError={(e: any) => (e.target.src = p.fallbackImage)} width={96} height={96} alt={p.name} onClick={() => setCurrent({name: p.name, index: p.id - 1})} priority/>
          <p>{firstLetterUpper(p.name)}</p>
        </div>
      ))}
    </div>
  )
}