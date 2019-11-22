import React from "react";
import styled from "styled-components";
import axios from "axios";
axios.defaults.withCredentials = true;

const Button = styled.div`
  background-color: #ff0033;
  border-radius: 20px;
  color: white;
  border: 1px solid #6633cc;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default function Logout(props) {
  const handleLogout = () => {
    axios
      .get("https://pic-metric.herokuapp.com/api/auth/logout/")
      .then(res => {
        console.log(res.data);
        localStorage.clear();
        props.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
