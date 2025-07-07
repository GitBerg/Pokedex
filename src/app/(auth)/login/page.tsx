'use client'

import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter()

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
                    <Image src="/settings.svg" alt="Logo" width={25} height={25} />
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

    .header{
        width: 100%;
        height: 80px;
        background-color: ${({ theme }) => theme.colors.bg_nav};

        .itens{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
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
                border: 1px solid #e4e4e4;
                border-radius: 2px;
                outline: none;
                font-weight: 600;
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
`