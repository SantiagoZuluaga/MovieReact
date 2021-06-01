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

    #res-menu{
        display: none;
    }

    #sign-one{
        margin-left: 10px;
        font-size: 30px;
        cursor: pointer;
        display: none;
    }

    li{
        display: inline-block;
    }

    @media (max-width: 800px) {
        #ul{
            position: fixed;
            width: 250px;
            height: 100vh;
            background: #111;
            top: 70px;
            left: -80%;
            padding: 0;
            margin: 0;
            text-align: center;
            transition: .5s;
            z-index: 10;
        }

        li a{
            margin-left: 0px;
            font-size: 20px;
            color: white; 
        }

        li{
            display: block;
            margin: 40px 0;
            line-height: 30px;
        }

        #sign-one{
            display: inline-block;
        }

        #ul-menu{
            position: fixed;
            width: 250px;
            height: 100vh;
            background: #111;
            top: 70px;
            padding: 0;
            margin: 0;
            text-align: center;
            transition: .5s;
            z-index: 10;
            left: 0;
        }        
    }
`;

const Logo = styled(Link)`
    font-family: 'Secular One', sans-serif;
    cursor: pointer;
    margin-left: 0;
    text-decoration: none;
    font-size: 25px;
    color: #dc3545;
    font-weight: 800;
    display: inline-block;

    @media (max-width: 800px) {
        margin-left: 20px;
    }
`;

const Links = styled(Link)`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    color: white;
    margin-left: 10px;
`;

const PanelMenu = styled.div`
    left: ${props => props.left};
    top: 70px;
    position: absolute;
    background: rgba(0,0,0, 0.3);
    width: 100%;
    height: calc(100vh - 70px);
`;

export default function Nav() {

    const [navbar, setNavbar] = useState({
        position: "fixed",
        background: "transparent"
    })

    const [menu, setMenu] = useState(false)

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
        <Navbar position={navbar.position} background={!window.screen.width <= 800 ? navbar.background : "#111"}>
            <ContainerNav>
                <div>
                    <input onClick={() => { setMenu(!menu); }} type="checkbox" id="res-menu" />
                    <label htmlFor="res-menu">
                        <i className="fa fa-bars" id="sign-one"></i>
                    </label>
                    <Logo to="/">
                        Movie React
                    </Logo>
                </div>
                <ul id={!menu ? "ul" : "ul-menu"} background={!menu ? navbar.background : "#111"}>
                    <li>
                        <Links onClick={() => { setMenu(false); }} to="/">
                            Home
                        </Links>
                    </li>
                    <li>
                        <Links onClick={() => { setMenu(false); }} to="/movies">
                            Movies
                        </Links>
                    </li>
                    <li>
                        <Links onClick={() => { setMenu(false); }} to="/series">
                            Tv shows
                        </Links>
                    </li>
                </ul>
                <PanelMenu left={!menu ? "-100%;" : "0;"} onClick={() => { setMenu(false); }}>
                </PanelMenu>
            </ContainerNav>
        </Navbar>
    );
}