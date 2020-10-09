import React from "react"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
    position: ${props => props.position};
    color: white;
    width: 100%;
    top: 0;
    z-index: 10;
    background-color: ${props => props.background};
`;

const ContainerNav = styled.div`    
    width: 95%;
    margin: 0 auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled(Link)`
    font-family: 'Secular One', sans-serif;
    cursor: pointer;
    margin-left: 0;
    text-decoration: none;
    font-size: 25px;
    color: #dc3545;
    font-weight: 800;
`;

const Ul = styled.ul`
`;

const Li = styled.li`
    display: inline-block;
`;

const Links = styled(Link)`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    color: white;
    margin-left: 10px;
`;

export default function Nav() {

    const [navbar, setNavbar] = useState({
        position: "fixed",
        background: "transparent"
    })

    const handlerScroll = () => {
        if (window.scrollY > 0) {
            setNavbar({
                position: "fixed",
                background: "#111"
            })
        }
        else {
            setNavbar({
                position: "fixed",
                background: "transparent"
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerScroll)
    }, [])

    return (
        <Navbar position={navbar.position} background={navbar.background}>
            <ContainerNav>
                <Logo to="/">
                    Movie React
                </Logo>
                <Ul>
                    <Li>
                        <Links to="/">
                            Home
                        </Links>
                    </Li>
                    <Li>
                        <Links to="/movies">
                            Movies
                        </Links>
                    </Li>
                    <Li>
                        <Links to="/series">
                            Tv shows
                        </Links>
                    </Li>
                </Ul>
            </ContainerNav>
        </Navbar>
    );
}