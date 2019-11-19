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
    justify-content: space-between;
`

const NavCont = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly
    width: 50%;

    @media (min-width: 767px) {
        width: 35%;
    }

    @media (min-width: 1199px) {
        width: 20%;
    }
`

const NavContR = styled.div`
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
`

export default function Navigation() {

    return (
        <Nav>
            <NavCont>
                <NavItem link="/" name="Home"/>
                <NavItem link="/myphotos" name="My Photos"/>
            </NavCont>

            <NavContR>
                <Logout/>
            </NavContR>
        </Nav>
    )
}