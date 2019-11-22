import React, { useReducer } from "react";

import { reducer, initialState } from "./reducers/reducers";
import { AppContext } from "./contexts/contexts";

import PrivateRoute from "./Components/Routes/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute/PublicRoute";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MyPhotos from "./Components/MyPhotos/MyPhotos";
import Footer from "./Components/Footer/Footer";
import Upload from "./Components/Upload/Upload";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <PrivateRoute path="/" component={Navigation} />

        <PublicRoute path="/login" component={Login} />

        <PublicRoute path="/register" component={Register} />

        <PrivateRoute exact path="/" component={MyPhotos} />

        <PrivateRoute path="/upload" component={Upload} />

        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
