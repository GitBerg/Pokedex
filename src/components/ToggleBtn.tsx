'use client'

import styled from "styled-components"
import { GoSun, GoMoon } from "react-icons/go";
import { useThemeCtx } from "@/app/providers/ThemeProvider";

export const ToggleBtn = () => {

    const { theme, toggle } = useThemeCtx()

   
    return (
        <Container>
            <span className={`${theme.name === 'light' ? 'selected' : ''} icon`}><GoSun /></span>
            <span className="bar" onClick={toggle}> <span className={`${theme.name === 'dark' ? 'dark' : 'light'} ball-slide`}></span></span>
            <span className={`${theme.name === 'dark' ? 'selected' : ''} icon`}><GoMoon /></span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
    height: 100%;

    .bar{
        width: 50px;
        height: 22px;
        position: relative;
        background-color: #fff;
        border-radius: 14px;
        padding: 2px;
        cursor: pointer;
        .ball-slide{
            display: block;
            width: 18px;
            height: 100%;
            background-color: #5E5A55;
            border-radius: 50%;
            transition: all 0.2s ease-in-out;
            &.dark{
                transform: translateX(28px);
            }
        }
    }

    .icon{
        font-size: 1.5rem;
        color: #fff;
        transform: translateY(3px);
    }

    .selected{
        filter: drop-shadow(0 0 2px #fff);
        transition: all 0.2s ease-in-out;
    }
`