import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
