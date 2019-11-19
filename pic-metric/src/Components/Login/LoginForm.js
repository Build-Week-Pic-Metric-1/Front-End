import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

    .register {
        color: #ff0033;
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

const Para = styled.p`
    color: white;
`

export default function LoginForm() {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const changeHandler = (e) => {
        if(e.target.name === "username") {
            setUser(e.target.value);
        }
        else {
            setPass(e.target.value);
        }
    }

    return (
        <Form>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" placeholder="Username" required/>

            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" placeholder="Password" required/>

            <Button type="submit">Login</Button>

            <Para>OR</Para>

            <Link to="/register" className="register">Register An Account</Link>
        </Form>
    )
}