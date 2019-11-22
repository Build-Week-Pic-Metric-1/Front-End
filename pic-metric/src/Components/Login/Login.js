import React from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #6633cc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: #330066;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    color: white;
    text-decoration: underline;
    text-decoration-color: #ff0033;
`

const Logo = styled.img`
    height: 5vw;
`

const ImgCont = styled.div`
    object-fit: contain;
`



export default function Login(props) {

    return (
        <>
        <Nav>
          <ImgCont>
            <Logo src={require("../../images/pic-metric-logo-gradient.png")} alt="logo" />
          </ImgCont>
        </Nav>
        <Container>
            <Title>Login</Title>
            <LoginForm props={props}/>
        </Container>
        </>
    )
}