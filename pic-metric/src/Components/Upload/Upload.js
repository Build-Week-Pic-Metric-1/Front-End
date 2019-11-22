import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";
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
`;
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
`;

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

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 767px) {
    width: 35%;
  }
`;

const Para = styled.p`
  color: white;
`;

const P = styled.p`
  text-align: center;
`;

export default function Upload(props) {
  const { state, dispatch } = useContext(AppContext);
  const [isUploading, setIsUploading] = useState(false);

  const initialState = {
    photo_title: "",
    photo_url: ""
  };

  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    if (e.target.name === "photo_title" && e.target.value.length > 15) {
      alert("Please limit your title to 15 characters");
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsUploading(true);
    axios
      .post(
        `https://pic-metric.herokuapp.com/api/photos/${localStorage.getItem(
          "userId"
        )}`,
        { ...values, photo_url: values.photo_url }
      )
      .then(res => {
        console.log(res.data);
        dispatch({ type: "UPLOAD_PHOTO", payload: res.data });
        setValues(initialState);
        setIsUploading(false);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong. Please try again.");
        setIsUploading(false);
      });
  };

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
          <P>
            The image must be a .JPG file uploaded to{" "}
            <a href="imgur.com">imgur</a>
          </P>
          <P>
            Right click on the displayed photo and select "copy image address"
          </P>
          <P>Paste the copied address into the field below.</P>
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
        {isUploading ? (
          <>
            <Loader type="ThreeDots" color="#ff0033" />
            <Para>Upload may take a few minutes</Para>
          </>
        ) : (
          <Button type="submit">Upload</Button>
        )}
      </Form>
    </Container>
  );
}
