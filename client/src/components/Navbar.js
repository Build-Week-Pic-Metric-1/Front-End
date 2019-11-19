import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/photos">My Photos</Link>
      <Link to="/login">Login/Sign Up</Link>
      <Link to="/login">Log Out</Link>
    </div>
  );
};

export default Navbar;
