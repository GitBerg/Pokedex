'use client'

import { usePokemonStore } from "@/store/pokemonStore";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
export default function SearchInput({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {

  const search = usePokemonStore((s) => s.search)
  const setSearch = usePokemonStore((s) => s.setSearch)
  return (
    <Container>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.trim())}
        placeholder="Search by name or number"
      />
      <IoIosSearch size={20} className="search-icon" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  input{
    width: 100%;
    padding: 10px 14px;
    border-radius: 50px;
    border: 1px solid #ccc;
    margin-bottom: 24px;
    margin-top: 35px;
    font-size: 0.9rem;
    outline: none;
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.5s ease-in-out;
  }

  .search-icon{
    position: absolute;
    right: 10px;
    bottom: 33px;
    fill: ${({ theme }) => theme.colors.text};
    transition: all 0.5s ease-in-out;
    user-select: none;
    pointer-events: none;
  }
`