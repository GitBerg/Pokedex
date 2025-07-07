import { create } from 'zustand'

interface PokemonStore  {
  current: { name: string; index: number }
  setCurrent: ({ name, index }: { name: string; index: number }) => void

  search: string
  setSearch: (value: string) => void

  navbar: boolean
  isOpen: () => void
}

export const usePokemonStore = create<PokemonStore >((set) => ({
  current: {name:"bulbasaur", index: 0},
  setCurrent: ({ name, index }) => set({ current: { name, index } }),

  search: '',
  setSearch: (v) => set({ search: v }),

  navbar: false,
  isOpen: () => set((state) => ({ navbar: !state.navbar })),
}))