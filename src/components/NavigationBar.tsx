'use client'
import Image from 'next/image'
import styled from 'styled-components'
import SearchInput from './SearchInput'
import { useState } from 'react'
import { PokemonList } from './PokemonList'

export default function NavigationBar() {

    const [search, setSearch] = useState('')

    return (
        <Container>
            <div className='search'>
            <Image src="/logo-pokedex.png" alt="Logo" width={280} height={55} />
            <h2>Everything you wanted to know about your favorite pocket monsters!</h2>
            <SearchInput value={search} onChange={setSearch}/>
            </div>
            <PokemonList />
        </Container>
    )
}

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    top: 0;
    left: 0;
    width: 18%;
    height: 100%;
    min-width: 350px;
    background-color: #DD4B4A;
    img{
        margin-bottom: 1rem;
    }
    h2{
        color:${({ theme }) => theme.colors.text};
        font-size: 0.9rem;
        font-weight: 400;
        text-align: center;
    }
    .search{
        border-bottom: 1px solid #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 25px;
    }
    `