import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Element = styled(Link)`
    margin: 5px;
`;

const Image = styled.img`
    width: ${props => props.imagetype === "backdrop_path" ? "250px" : "233px"};
    height: ${props => props.imagetype === "backdrop_path" ? "141px" : "350px"};
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 800px) {
        width: ${props => props.imagetype === "backdrop_path" ? "200px" : "150px"};
        height: ${props => props.imagetype === "backdrop_path" ? "113px" : "225px"};
    }

    @media (min-width: 800px) {
        &:hover{
            transform: scale(1.1);
            transform-origin: center;
        }
    }
`;

export default function ScrollItem({ element, type, imagetype }) {

    return (
        <>
            {element.media_type === "movie" || type === "movies" ?
                <Element>
                    <Image loading="lazy" imagetype={imagetype} src={"https://image.tmdb.org/t/p/w300" + element[imagetype]} alt="Poster" />
                </Element> :
                <Element >
                    <Image loading="lazy" imagetype={imagetype} src={"https://image.tmdb.org/t/p/w300" + element[imagetype]} alt="Poster" />
                </Element>
            }
        </>

    )
}