import React from "react";

const Photo = props => {
  return (
    <div>
      <img src="" alt="link props.whatever here" />
      <h3>Photo Title Here</h3>
      <li>
        <ol>Classification1, confidence 1</ol>
        <ol>Classification2, confidence 2</ol>
        <ol>Classification3, confidence 3</ol>
      </li>
      <button>Update title</button>
      <button>Delete photo</button>
    </div>
  );
};

export default Photo;
