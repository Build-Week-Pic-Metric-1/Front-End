import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  text-align: center;
`;

export default function Card(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Img src={props.src} />
    </Container>
  );
}
