import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {Doughnut, Bar} from "react-chartjs-2";

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
`

const Image = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: -4px;
`

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    &:hover {
        opacity: 1;
        transition: .3s ease;
    }
`

const Span = styled.span`
    color: #ff0033;
`

export default function MyPhotos() {
    const [photos, setPhotos] = useState([
    {
      url:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/19091354/Weimaraner-puppy-outdoors-with-bright-blue-eyes.20190813165758508-1.jpg",
      classification1: "Dog",
      confidence1: ".7",
      classification2: "Bear",
      confidence2: ".2",
      classification3: "Tiger",
      confidence3: ".1"
    },
    {
      url:
        "https://www.marylandzoo.org/wp-content/uploads/2017/08/brown_bear_web-1024x683.jpg",
      classification1: "Bear",
      confidence1: ".7",
      classification2: "Bird",
      confidence2: ".2",
      classification3: "Tree",
      confidence3: ".1"
    },
    {
      url:
        "https://www.woburnsafari.co.uk/media/2835348/tigers-3_2-1.jpg?width=920&height=460&mode=crop",
      classification1: "Tiger",
      confidence1: ".7",
      classification2: "Grass",
      confidence2: ".2",
      classification3: "Watch",
      confidence3: ".1"
    }
  ]);

  const options = {
      legend: {
          labels: {
              fontColor: "#fff"
          }
      }
  }

    useEffect(() => {
        // axios.get("https://pic-metric.herokuapp.com/api/photos/1").then((response) => {
        //     console.log(response);
        // }).catch((err) => {
        //     console.log(err);
        // })
    }, [])

    return (
        <Container>
            <Title>My Photos</Title>

            {photos.map((el, index) => {
                return <ImageCont key={index}>
                    <Image src={el.url}/>
                    <Overlay>
                    <Doughnut className="Chart" data={{
                            labels: [el.classification1, el.classification2, el.classification3],

                            datasets: [{
                                data: [el.confidence1 *100, el.confidence2 * 100, el.confidence3 * 100],
                                 backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                                ],
                                hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56'
                                ]
                            }],
                        }} options={options}/>
                    </Overlay>
                </ImageCont>
            })}
        </Container>
    )
}