import React from "react"
import styled from 'styled-components'
import ScrollItem from './scrollitem'

const ContainerScroll = styled.div`
`;

const Title = styled.h3`
    margin-left: 20px;
    color: white;
    font-size: 25px;
    font-family: 'Secular One', sans-serif;
    font-weight: 800;

    @media (max-width: 800px) {
        font-size: 1.5em;
        font-weight: 100;
    }
`;

const ScrollSpace = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`;

const Scroll = styled.div`
    display: flex;
    overflow-x: scroll;
    padding-left: 30px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default function FlexRow({content, type, title, imagetype}) {

    return(
        <ContainerScroll>
            <Title>{title}</Title>
            <Scroll>
                {content.map((element, index) => {
                    if(element[imagetype] !== null) {
                        return <ScrollItem key={index+element.id} element={element} type={type} imagetype={imagetype}></ScrollItem>
                    }
                    else {
                        return null
                    }
                })}
                <ScrollSpace imagetype={imagetype}></ScrollSpace>
            </Scroll>
        </ContainerScroll>
    )
}