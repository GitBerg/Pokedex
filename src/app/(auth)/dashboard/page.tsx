'use client' 

import CardGrid from "@/components/CardGrid";
import  NavigationBar  from "@/components/NavigationBar"
import styled from "styled-components";

export default function Dashboard() {
    return (
        <Container>
            <NavigationBar />
            <CardGrid />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`