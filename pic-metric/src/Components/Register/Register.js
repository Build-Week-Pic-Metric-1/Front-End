import React from "react";
import styled from "styled-components";

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

const Form = styled.form`
    width: 80%;
    background-color: #330066;
    padding: 2.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;

     @media (min-width: 767px) {
        width: 70%;
    }

    @media (min-width: 1199px) {
        width: 40%;
    }
`

const Label = styled.label`
    margin-top: 10px;
    color: white;
`

const Input = styled.input`
    padding: 3%;
    border-radius: 10px;
    width: 70%;

    @media (min-width: 767px) {
        width: 40%;
        padding: 2%;
    }
`

const Button = styled.button`
    width: 60%;
    border-radius: 20px;
    background-color: #ff0033;
    border: 1px solid #6633cc;
    color: white;
    margin: 10px auto;
    padding: 3%;

    @media (min-width: 767px) {
        width: 35%;
    }
`

export default function Register() {

    return (
        <Container>
            <Title>Sign Up</Title>
            
            <Form>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" placeholder="Username"/>

                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Password"/>

                <Button type="submit">Sign Up</Button>
            </Form>
        </Container>
    )
}