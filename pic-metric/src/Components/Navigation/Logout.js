import React from "react";
import styled from "styled-components";

const Button = styled.div`
    background-color: #ff0033;
    border-radius: 20px;
    color: white;
    border: 1px solid #6633cc;
    padding: 5px 10px;
`

export default function Logout() {

    return (
        <Button>Logout</Button>
    )
}