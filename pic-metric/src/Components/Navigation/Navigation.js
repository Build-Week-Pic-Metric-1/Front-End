import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";
import Logout from "./Logout";

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: #330066;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const NavCont = styled.div`
    margin: 0;
    margin-left: -10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly
    width: 30%;
`

const NavContR = styled.div`
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Logo = styled.img`
    height: 5vw;
`

const ImgCont = styled.div`
    margin-left: -15%;
    object-fit: contain;
    align-self: center;

    
`

export default function Navigation(props) {

    return (
        <Nav>
            <NavCont>
                <NavItem link="/" name="My Photos"/>
                <NavItem link="/upload" name="Upload Photo" />
                <NavItem link="/stats" name="Statistics"/>
            </NavCont>
            <ImgCont>
              <Logo src={require("../../images/pic-metric-logo-gradient.png")} alt="logo" />
            </ImgCont>
            <NavContR>
                <Logout props={props}/>
            </NavContR>
        </Nav>
    )
}