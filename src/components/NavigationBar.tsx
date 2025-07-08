'use client'
import Image from 'next/image'
import styled from 'styled-components'
import SearchInput from './SearchInput'
import { PokemonList } from './PokemonList'
import { usePokemonStore } from '@/store/pokemonStore'
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function NavigationBar() {

    const search = usePokemonStore((s) => s.search)
    const setSearch = usePokemonStore((s) => s.setSearch)
    const navBar = usePokemonStore((s) => s.navbar)
    const setNavBar = usePokemonStore((s) => s.isOpen)

    return (
        <Container className={navBar ? 'open' : 'closed'}>
            <div className='bg'></div>
            <IoIosCloseCircleOutline className='close-icon' onClick={() => setNavBar()}/>
            <div className='search'>
            <Image src="/logo-pokedex.png" alt="Logo" width={280} height={55} />
            <h2>Everything you wanted to know about your favorite pocket monsters!</h2>
            <SearchInput value={search} onChange={setSearch}/>
            </div>
            <div className='line-box'><span className='line'></span></div>
            <PokemonList onClick={() => setNavBar()}/>
        
        </Container>
    )
}

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 3rem 0 3rem 3rem;
    padding-bottom: 80px;
    width: 350px;
    flex-shrink: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bg_nav};
    transition: all 0.5s ease-in-out, width 1s ease-in-out;
    

    & * {
            opacity: 1;
            transition: all 1s ease-in-out;

        }
    
    img{
        margin-bottom: 1rem;
        width: 100%;
        height: 100%;
    }
    h2{
        color: #fff;
        font-size: clamp(0.9rem, 0.8vw, 3rem);
        font-weight: 400;
        text-align: center;
    }
    .search{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-right: 48px;
    }

    .line-box{
        width: 100%;
        height: 1px;
        padding-right: 48px;
        margin-bottom: 30px;
        .line{
            display: block;
            width: 100%;
            height: 1px;
            background-color: #fff;
        }
    }

    .close-icon{
        display: none;
    }

    @media (max-width: 1024px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        overflow: hidden;

        &.closed{
            display: none;
        }

        .bg{
        position: fixed;
        top: 0;
        right: 0;
        width: calc(100vw - 350px);
        height: 100%;
        background-color: #fff;
        opacity: 60%;
        z-index: 2;


        &.open{
            display: block;
        }   

        

    }
        .close-icon{
            display: block;
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 2rem;
            fill: #fff;
            cursor: pointer;
            user-select: none;
        }

    }

    @media (max-width: 500px) {
        width: 100%;
        height: 100vh;
        .bg{
            display: none;
        }
    }
    `