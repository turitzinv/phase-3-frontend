import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import LibraryList from "./components/LibraryList";
import CreateNewBook from "./components/CreateNewBook";

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
        <Route path="/createnewbook">
          <CreateNewBook />
        </Route>
        <Route path="/*">
          <h1>404 use valid url</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
