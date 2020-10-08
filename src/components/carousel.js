import React from "react"
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ContainerCarousel = styled.div`
    position: relative;
`;

const ContainerImage = styled.div`
    width: 100%;
    max-height: 85vh;
    overflow: hidden;
`;

const ShadowCarousel = styled.div`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 7.5rem;
    background-image: linear-gradient(180deg,transparent,rgba(37,37,37,.61),#111);
`;

const Panel = styled.div`
    top: 0;
    position: absolute;
    background: rgba(17, 17, 17, 0.6);
    width: 100%;
    height: 100%;
`;

const Information = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: flex;  
    align-items: flex-end;
`;

const Block = styled.div`
    width: 80%;
    padding: 0px 40px 80px 40px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 800px) {
        padding: 0px 20px 20px 20px;
    }
`;

const Title = styled.h3`
    font-family: 'Secular One', sans-serif;
    font-size: 2.5em;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
    margin-bottom: 10px;

    @media (max-width: 800px) {
        font-weight: 500;
        font-size: 1.5em;
    }
`;

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    border: 0;
    margin: 5px 5px 0px 5px;
    font-size: 1em;
    color: white;
    background-color: #dc3545;
    padding: 8px 12px 8px 12px;
`;

export default function Carousel ({popular}) {

    const randomChooseCurrent = () => {
        return Math.floor(Math.random() * 20);   
    }

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        setCurrent(randomChooseCurrent())
    }, [])

    /*
    useEffect(() => {
        const intervalRandom = setInterval(() => {
            let random;
            do {
                random = randomChooseCurrent()
            } while(current == random)
            setCurrent(random)
        }, 10000);

        return () =>  {
            clearInterval(intervalRandom)
        }
    }, [])
    */
   
    return(
        <ContainerCarousel>
            <ContainerImage>
                <img loading="lazy" width="100%" src={"https://image.tmdb.org/t/p/w1280/" + popular[current].backdrop_path} alt="Poster"/>
            </ContainerImage>       
            <ShadowCarousel></ShadowCarousel>
            <Panel>
                {popular[current].media_type === "movie"?
                    <Information>
                        <Block>
                            <Title>{popular[current].original_title}</Title>
                            <Button>Watch trailer</Button>
                            <Button>More info</Button>
                        </Block>
                    </Information>:
                    <Information>
                        <Block>
                            <Title>{popular[current].name}</Title>
                            <Button>Watch trailer</Button>
                            <Button>More info</Button>
                        </Block>
                    </Information>
                }
            </Panel>
        </ContainerCarousel>
    )
}