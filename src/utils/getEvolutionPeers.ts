import { extractId } from "./utilityFunctions";

type Node = {
  species: { name: string; url: string }
  evolves_to: Node[]
}

export interface EvoPeer {
  id: number
  name: string
  image: string
  fallbackImage: string
}


export const getEvolutionPeers = (
  root: Node,
  currentName: string,
): EvoPeer[] => {
  const peers: EvoPeer[] = []

  const dfs = (node: Node) => {
    if (node?.species.name !== currentName.toLowerCase()) {
      const id = extractId(node?.species.url)
      peers.push({
        id,
        name: node?.species.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        fallbackImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      })
    }
    node?.evolves_to.forEach(dfs)
  }

  dfs(root)
  return peers
}