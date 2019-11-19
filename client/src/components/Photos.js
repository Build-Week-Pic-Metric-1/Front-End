import React from "react";
import { Link } from "react-router-dom";
import MetricChart from "./MetricChart";
import Photo from "./Photo";

const Photos = () => {
  const photos = ["this will be state"];

  return (
    <div>
      <Link to="/upload">Upload Photo</Link>
      <MetricChart />
      {photos.map(el => (
        <Photo photo={el} />
      ))}
    </div>
  );
};

export default Photos;
