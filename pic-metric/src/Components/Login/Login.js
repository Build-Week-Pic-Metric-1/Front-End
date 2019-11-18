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

const Title = styled.h2`
    color: white;
    text-decoration: underline;
    text-decoration-color: #ff0033;
`

export default function Login() {

    return (
        <Container>
            <Title>Login</Title>
            <LoginForm />
        </Container>
    )
}