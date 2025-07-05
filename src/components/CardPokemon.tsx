'use client'
import Image from 'next/image'
import styled from 'styled-components'

interface CardProps {
  name: string
  image: string
  types: string[]
}

export default function CardPokemon({ name, image, types }: CardProps) {
  return (
    <Card>
      <Image src={image} alt={name} />
      <h3>{name}</h3>
      <TypeList>
        {types.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </TypeList>
    </Card>
  )
}

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  img {
    width: 96px;
    height: 96px;
    object-fit: contain;
  }
  h3 {
    text-transform: capitalize;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover {
    transform: translateY(-4px);
  }
`
const TypeList = styled.div`
  margin-top: 0.25rem;
  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
    padding: 2px 6px;
    margin: 0 2px;
    border-radius: 6px;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
