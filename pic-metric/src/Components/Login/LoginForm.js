import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios"
import {Link} from "react-router-dom";
axios.defaults.withCredentials = true;

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

export default function LoginForm(props) {

    const initialState = {
      username: "",
      password: ""
    };

    const [values, setValues] = useState(initialState);

    const changeHandler = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = e => {
      e.preventDefault();
      axios
        .post(`https://pic-metric.herokuapp.com/api/auth/login/`, values)
        .then(res => {console.log(res.data); setValues(initialState); localStorage.setItem('userId', res.data.id); props.props.history.push("/")})
        .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" value={values.username} placeholder="Username" required onChange={changeHandler}/>

            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" value={values.password} placeholder="Password" required onChange={changeHandler}/>

            <Button type="submit">Login</Button>

            <Para>OR</Para>

            <Link to="/register" className="register">Register An Account</Link>
        </Form>
    )
}