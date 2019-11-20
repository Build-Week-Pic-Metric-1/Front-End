import React from 'react';
import {Route} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MyPhotos from "./Components/MyPhotos/MyPhotos";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/login" render={() => {
        return <Login />
    }}/>

      <Route path="/register" render={() => {
        return <Register />
    }}/>

      <Route path="/myphotos" render={() => {
        return <MyPhotos />
      }} />

    <Footer />
    </div>
  );
}

export default App;
