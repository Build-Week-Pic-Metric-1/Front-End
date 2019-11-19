import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [photoData, setPhotoData] = useState({
    url: "",
    title: ""
  });

  const handleSubmit = () => {
    //POST
    setPhotoData({
      url: "",
      title: ""
    });
  };

  const handleChange = e => {
    setPhotoData({ ...photoData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="url"
        placeholder="Photo URL"
        value={photoData.url}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Photo Title"
        value={photoData.title}
        onChange={handleChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
