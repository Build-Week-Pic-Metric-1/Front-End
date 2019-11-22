import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
axios.defaults.withCredentials = true;

const Cont = styled.div`
  display: flex;
`;

const PhotoTitle = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  text-decoration-color: #ff0033;
  font-size: 1.5vw;
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

const SubOverlay = props => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleChange = e => {
    if (e.target.value.length > 15) {
      alert("Please limit your title to 15 characters");
    } else {
      setNewTitle(e.target.value);
    }
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    axios
      .put(
        `https://pic-metric.herokuapp.com/api/photos/${localStorage.getItem(
          "userId"
        )}`,
        { photo_id: props.photo.id, photo_title: newTitle }
      )
      .then(res => {
        console.log(res);
        setEditing(!editing);
        props.dispatch({
          type: "EDIT_TITLE",
          payload: { id: props.photo.id, title: newTitle }
        });
      })
      .catch(err => console.log(err));
  };

  const handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`https://pic-metric.herokuapp.com/api/photos/${props.photo.id}`)
      .then(res => {
        console.log(res);
        props.dispatch({ type: "DELETE_PHOTO", payload: props.photo.id });
      })
      .catch(err => console.log(err));
  };

  return (
    <Cont>
      {editing ? (
        <>
          <Button onClick={() => setEditing(!editing)}>Cancel</Button>
          <TitleInput
            type="text"
            value={newTitle}
            placeholder="New Title"
            onChange={handleChange}
          />
          <Button onClick={handleEditSubmit}>Submit</Button>
        </>
      ) : (
        <>
          <Button onClick={() => setEditing(!editing)}>Edit Title</Button>
          <PhotoTitle>{props.photo.title}</PhotoTitle>
          <Button onClick={handleDelete}>Delete Photo</Button>
        </>
      )}
    </Cont>
  );
};

export default SubOverlay;
