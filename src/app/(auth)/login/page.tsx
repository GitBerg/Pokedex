'use client'

import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToggleBtn } from "@/components/ToggleBtn";

export default function Login() {

    const router = useRouter()

    const [modalIsOpen, setModalIsOpen] = useState(false);  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()

          const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)
            .value.trim()

          if (!email) return  
          document.cookie = `pokedex_email=${email}; path=/; max-age=2592000`                  
          localStorage.setItem('pokedex_email', email)  
          router.push('/dashboard')            
        }

    return (
        <Container >
            <div className="header">
                <div className="itens">
                    <Image src="/logo-pokedex.png" alt="Logo" width={200} height={40} />
                    <Image className={`setting ${modalIsOpen ? 'clicked' : ''}`} src="/settings.svg" alt="setting" width={25} height={25} style={{ cursor: 'pointer' }} onClick={() => setModalIsOpen(modalIsOpen => !modalIsOpen)}/>
                    <span className={`modal ${modalIsOpen ? 'open' : ''}`}> <ToggleBtn /></span>
                </div>
            </div>
            <div className="content">
                <form className="form" onSubmit={handleSubmit}>
                    <Image src="/pokeball.svg" alt="Logo" width={150} height={150} />
                    <div className="inputs">
                        <input name="email" type="email"  placeholder="Seu melhor e-mail" required />
                        <button type="submit">Acessar</button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.bg_login};
    .header{
        width: 100%;
        height: 80px;
        position: relative;
        background-color: ${({ theme }) => theme.colors.bg_nav};

        .itens{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            transition: all 0.3s ease-in-out;

            .setting{
                transition: all 0.3s ease-in-out;
                &.clicked{
                    transform: rotate(180deg);
                }
            }
        }

        .modal{
            position: absolute;
            right: 40px;
            bottom: -50px;
            background-color: ${({ theme }) => theme.colors.bg};
            border-radius: 8px;
            padding:8px;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease-in-out;
            &.open{
                opacity: 1;
                pointer-events: all;
                transform: translateY(10px);
            }
        }
    }

    .content{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        .inputs{
            display: flex;
            flex-direction: column;
            gap: 14px;  
            width: 400px;
            outline: none;
            input{
                padding: 12px 10px;
                border: 1px solid ${({ theme }) => theme.colors.border};
                border-radius: 2px;
                color: ${({ theme }) => theme.colors.text};
                outline: none;
                font-weight: 600;
                background-color: ${({ theme }) => theme.colors.bg_login};
                &::placeholder{
                    color: #8f8f8f;
                }
            }
            button{
                width: 35%;
                border: none;
                background-color: ${({ theme }) => theme.colors.btn};
                color: #fff;
                font-weight: 600;
                padding: 10px 0;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 425px) {
        .form{
            width: 100%;
            padding: 0 40px;
            .inputs{
                width: 100%;
            }
        }
    }
`