import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    width: 100%;
    padding: 1.7rem 8rem;
    padding-bottom: 5%;
    background-color: ${({ theme }) => theme.colors.bg};
    gap: 4rem;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    .section-top{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .pokemon-name{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            h1{
                font-size: clamp(1.1rem, 2.3vw, 4rem);
                color: #fff;
                font-weight: 400;
            }
        }
        .toggle-theme{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .section-bottom{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 77%;
        gap: clamp(2rem, 4vw , 5rem);
        flex-grow: 0;
        .pokemon-stats{
            width: 70%;
            display: flex;
            flex-direction: column;
            gap: 4%;
            .pokemon-image{
                padding: 2rem;
                justify-content: center;
                align-items: center;
                min-width: 240px;
                height: clamp(240px, 55%, 55%);            
                img{
                    object-fit: contain;
                    width: 90%;
                    height: 90%;
                }
            }
        }
        .pokemon-types{
                gap: 1rem; 
                height: 7%;
                .tags{
                    display: flex;
                    gap: 1rem;
                   .tag-type{
                   padding: 4px 16px;
                   font-weight: 400;
                   border-radius: 8px;
                   color: #fff;
                   font-size: clamp(0.8rem, 0.8vw, 3rem);
                }
                }
                
            }
        .pokemon-infos{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            width: 100%;
            height: 7%;
            .info{
                gap: 0.4rem;
                justify-content: start;
                height: 100%;
                .info-stat{
                    font-weight: 400;
                    font-size: clamp(0.7rem, 0.8vw, 3rem);
                    color: ${({ theme }) => theme.colors.text};
                    transition: all 0.5s ease-in-out;
                }
            }
        }
        .pokemon-attributes{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            padding: 1rem 1.5rem;
            flex: 1;
            min-height: 0;
            overflow: hidden;
            p{
                margin-bottom: 0.8rem;
                min-height: 0;

            }
            .attributes{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 1rem 1.2rem;
                width: 100%;
                height: 100%;
                min-height: 0;
                min-width: 0;
                .att-tag{
                    min-height: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 400;
                    border-radius: 6px;
                    font-size: clamp(0.6rem, 0.8vw, 3rem);
                    color: #fff;
                    padding: 4px 8px; 
                }
            }
        }
           
        }
         .pokemon-description{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            height: 100%;
            min-width: 350px;
            .evolutions{
                align-items: start;
                display: flex;
                gap: 2rem;
                height: 15%;
                min-height: 158px;
                position: relative;
                .evolution-list{
                    display: flex;
                    gap: 2rem;
                    min-width: 100px;
                    width: 100%;
                    height: 100%;
                    overflow-x: auto;
                    overflow-y : hidden;
                    .evolution{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                
                    p{
                        font-weight: 400;
                        text-align: center;
                        color: ${({ theme }) => theme.colors.text};
                        transition: all 0.5s ease-in-out;
                    }
                    img{
                        object-fit: contain;
                        width:100%;
                        height: 80%;               
                    }
                }
                &.skeleton{
                    .skeleton-evo{
                        height: 200px;
                    }
                    }
                }
            }
            .description{
                flex-direction: column;
                align-items: start;
                gap: 0.5rem;
                text-align: justify;
                line-height: 1.5em;
                font-weight: 400;
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                color: ${({ theme }) => theme.colors.text};
                .text{
                    font-size: clamp(0.8rem, 0.8vw, 1.5rem);
                }

            }
        }

        .menu-icon{
            display: none;
        }
        .card{
            display: flex;
            width: 100%;
            padding: 0.8rem 1.5rem;
            box-shadow: -1px 1px 18px -8px rgba(0,0,0,0.75);
            background-color: ${({ theme }) => theme.colors.card};
            border-radius: 12px;
            align-items: center;
            transition: all 0.5s ease-in-out;
        }

        .title{
            font-weight: 500;
            color: ${({ theme }) => theme.colors.text};
            transition: all 0.5s ease-in-out;
            font-size: clamp(0.8rem, 0.8vw, 1.5rem);

        }

        @media (max-width: 1368px) {
        overflow-y: auto;
        padding: 1.5rem 5rem;
        .section-bottom{
            flex-wrap: wrap;
            overflow: visible;
            width: 100%;
            height: 100%;
            .pokemon-stats{
                display: grid;
                flex: 1;
                min-width: 0;
                min-height: 0;
                height: 50%;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                .pokemon-image{
                    grid-row-start: 1;
                    grid-row-end: 4;
                    height: 100%;
                    min-height: 0;
                }
                .pokemon-types{
                    min-width: 0;
                    min-height: 0;
                    border-radius: 8px;
                    height: 100%;
                }
                .pokemon-infos{
                    min-width: 0;
                    min-height: 0;
                    height: 100%;
                    .info{
                        min-width: 0;
                        border-radius: 8px;
                    }
                }
                .pokemon-attributes{
                    min-width: 0;
                    border-radius: 8px;
                }
            }
            .pokemon-description{
                height: 60%;
                min-width: 0;
                min-height: 0;
                padding-bottom: 80px;

            .description{
                min-height: 0;
                
            }

            .evolutions{
                min-height: 0;
                height: 150px;
               
            }
             }
            
        }
        
        }

    @media (max-width: 1024px) {
        .section-bottom{
            .pokemon-stats{
                .pokemon-types{
                    height: 50px;
                }

                .pokemon-infos{
                    height: 50px;
                }

                .pokemon-attributes{
                .attributes{
                    .att-tag{
                        padding: 4px 10px; 
                    }
                }
            }

            }
            
            .pokemon-description{
                .evolutions{
                    height: 200px;
                }
            }
        }
       .menu-icon{
        display: block;
        position: absolute;
        left: 25px;
        top: 20px;
        opacity: 1;
        cursor: pointer;
        fill: #fff;
        font-size: 2rem;
        pointer-events: initial;
        transition: all 0.3s ease-in-out;
        user-select: none;
       }

       .open{
        opacity: 0;
        pointer-events: none;
       }
    }

    @media (max-width: 768px) {
        .section-bottom{
            .pokemon-stats{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                height: 60%;
                .pokemon-image{
                    padding: 0;
                    height: 40%;
                }
                .pokemon-attributes{
                    height: 20%;
                }
            }
            .pokemon-description{
                min-height: 0;
                height: 100%;
                .description{
                    min-height: 0;
                }
            }

        }
    }

     @media (max-width: 500px) {
        padding: 2rem;
     }
    
`