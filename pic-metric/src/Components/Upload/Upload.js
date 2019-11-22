import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../../contexts/contexts";
axios.defaults.withCredentials = true;

const Container = styled.div`
  min-height: 80vh
  background-color: #6633cc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
`
const Title = styled.h2`
    color: white;
    text-align: center;
    width: 100%;
    text-decoration: underline;
    text-decoration-color: #ff0033;

    @media (min-width: 767px) {
        font-size: 3rem;
        margin: 0;
    }
`

const Form = styled.form`
  margin-top: 120px;
  width: 80%;
  height: 50%;
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

const Para = styled.p`
  color: white;
`;

export default function Upload(props) {
  const { state, dispatch } = useContext(AppContext);

  const initialState = {
    photo_title: "",
    photo_url: ""
  };

  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://pic-metric.herokuapp.com/api/photos/${localStorage.getItem("userId")}`, {...values, photo_url: values.photo_url})
      .then(res => {console.log(res.data); dispatch({type:"UPLOAD_PHOTO", payload:res.data}); setValues(initialState); props.history.push("/")})
      .catch(err => {console.log(err); alert("Something went wrong. Please try again.")})
  }

  return (
    <Container>
      <Title>Upload Photo</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Photo title</Label>
        <Input
          type="text"
          id="username"
          name="photo_title"
          placeholder="Photo Title"
          value={values.photo_title}
          required
          onChange={handleChange}
        />

        <Label htmlFor="password">
          Photo URL - must be a .JPG file uploaded to{" "}
          <a href="imgur.com">imgur</a>
        </Label>
        <Input
          type="text"
          id="password"
          name="photo_url"
          placeholder="Photo URL"
          value={values.photo_url}
          required
          onChange={handleChange}
        />

        <Button type="submit">Upload</Button>

        <Para>Upload may take a few minutes</Para>
      </Form>
    </Container>
  );
}
