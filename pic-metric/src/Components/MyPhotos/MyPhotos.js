import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../../contexts/contexts";
import { Doughnut } from "react-chartjs-2";
import SubOverlay from "./SubOverlay"
axios.defaults.withCredentials = true;

const Container = styled.div`
  width: 95%;
  padding: 2.5%;
  min-height: 80vh;
  background-color: #6633cc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
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

const Title2 = styled.h2`
  color: white;
  text-align: center;
  width: 100%;
  text-decoration-color: #ff0033;

  @media (min-width: 767px) {
    font-size: 3rem;
    margin: 0;
  }
`;

const ImageCont = styled.div`
  position: relative;
  margin: 20px auto;
  width: 90%;

  @media (min-width: 767px) {
    width: 45%;
  }

  @media (min-width: 1199px) {
    width: 30%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: -4px;
`;

const Overlay = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  opacity: 0;

  &:hover {
    opacity: 1;
    transition: 0.3s ease;
  }
`;

const Span = styled.span`
  color: #ff0033;
`;

// const SubOverlay = styled.div`
//   display: flex;
// `;

const PhotoTitle = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  text-decoration: underline;
  text-decoration-color: #ff0033;
  font-size: 2vw;
`;

const TitleInput = styled.input`
  margin: 0 20px;
`;

const Button = styled.button`
    background-color: #ff0033;
    border-radius: 10px;
    color: white;
    border: 1px solid #6633cc;
    padding: 5px 10px;

    &:hover {
      cursor: pointer;
    }
`;

export default function MyPhotos() {
  const { state, dispatch } = useContext(AppContext);

  console.log(state)

  const orderedPhotos = [...state.userPhotos]
  orderedPhotos.sort(function(a, b){return a.id-b.id})

  const options = {
    legend: {
      labels: {
        fontColor: "#fff"
      }
    }
  };

  useEffect(() => {
      axios.get(`https://pic-metric.herokuapp.com/api/photos/${localStorage.getItem("userId")}`).then((res) => {
          console.log(res.data);
          dispatch({type: "GET_USER_PHOTOS", payload: res.data})
      }).catch((err) => {
          console.log(err);
      })
  },[])

  if (state.userPhotos.length === 0) {
    return (
      <Container>
        <Title2>
          You haven't uploaded any photos! Click <a href="/upload">here</a> to
          get started.
        </Title2>
      </Container>
    );
  }

  return (
    <Container>
      <Title>My Photos</Title>

      {orderedPhotos.map((el, index) => {
        return (
          <ImageCont key={index}>
            <Image src={el.url} />
            <Overlay>
              <Doughnut
                className="Chart"
                data={{
                  labels: [
                    el.classification1,
                    el.classification2,
                    el.classification3
                  ],

                  datasets: [
                    {
                      data: [
                        el.confidence1 * 100,
                        el.confidence2 * 100,
                        el.confidence3 * 100
                      ],
                      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                    }
                  ]
                }}
                options={options}
              />
              <SubOverlay photo={el} dispatch={dispatch}/>
              {/* {editing ? (
                <SubOverlay>
                  <Button onClick={() => setEditing(!editing)}>Cancel</Button>
                  <TitleInput
                    type="text"
                    value={newTitle}
                    placeholder="New Title"
                    onChange={handleChange}
                  />
                  <Button onClick={handleEditSubmit}>Submit</Button>
                </SubOverlay>
              ) : (
                <SubOverlay>
                  <Button onClick={() => setEditing(!editing)}>
                    Edit Title
                  </Button>
                  <PhotoTitle>{el.title}</PhotoTitle>
                  <Button onClick={() => handleDelete(el.id)}>
                    Delete Photo
                  </Button>
                </SubOverlay>
              )} */}
            </Overlay>
          </ImageCont>
        );
      })}
    </Container>
  );
}
