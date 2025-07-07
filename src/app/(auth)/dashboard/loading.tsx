'use client'

import Image from "next/image";
import styled from "styled-components";

export default function Loading() {
    return (
        <Container>
         <Image src="/pokeball_loading.gif" alt="pokeball" width={400} height={350} />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #25537B;
    img{
        object-fit: contain;
    }
    `
