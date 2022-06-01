import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import LibraryList from "./components/LibraryList";

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/librarylist">
          <LibraryList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
