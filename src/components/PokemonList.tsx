import styled from 'styled-components'

export function PokemonList() {
    return (
        <Container>
            <li className='selected'>#001 - Bulbasaur</li>
            <li>#002 - Ivysaur</li>
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
            <li>#003 - Venusaur</li> 
        </Container>
    )
}

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    overflow: auto;
    li{
        font-size: 1.3rem;
        line-height: 2.5rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
    }
    .selected{
        font-weight: 800;
        text-decoration: underline;
    }
`
