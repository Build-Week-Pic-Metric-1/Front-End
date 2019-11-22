import React, { useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background-color: #6633cc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
  text-decoration: underline;
  text-decoration-color: #ff0033;
`;

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
`;

const Label = styled.label`
  margin-top: 10px;
  color: white;
`;

const Input = styled.input`
  padding: 3%;
  border-radius: 10px;
  width: 70%;

  @media (min-width: 767px) {
    width: 40%;
    padding: 2%;
  }
`;

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
`;
const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #330066;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 5vw;
`;

const ImgCont = styled.div`
  object-fit: contain;
`;

const Para = styled.p`
  color: white;
`;

export default function Register(props) {
  const initialState = {
    username: "",
    password: ""
  };

  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`https://pic-metric.herokuapp.com/api/auth/register/`, values)
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        setValues(initialState);
        localStorage.setItem("userId", res.data.id);
        props.history.push("/upload");
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong. Please try again");
      });
  };

  return (
    <>
      <Nav>
        <ImgCont>
          <a href="https://build-week-pic-metric-1.github.io/Marketing-Page/">
            <Logo
              src={require("../../images/pic-metric-logo-gradient.png")}
              alt="logo"
            />
          </a>
        </ImgCont>
      </Nav>
      <Container>
        <Title>Sign Up</Title>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={values.username}
            placeholder="Username"
            required
            onChange={changeHandler}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={values.password}
            placeholder="Password"
            required
            onChange={changeHandler}
          />
          {isLoading ? (
            <Loader type="ThreeDots" color="#ff0033" />
          ) : (
            <>
              <Button type="submit">Sign Up</Button>

              <Para>Already have an account?</Para>

              <Button
                type="button"
                onClick={() => props.history.push("/login")}
              >
                Register an Account
              </Button>
            </>
          )}
        </Form>
      </Container>
    </>
  );
}
