import React, { useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import LibraryList from "./components/LibraryList";
import CreateNewBook from "./components/CreateNewBook";


function App() {
  const [allLibraries, setLibraries] = useState([]);
  const [allBooks, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/libraries")
    .then((resp) => resp.json())
    .then((libraries) => setLibraries(libraries))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then ((resp) => resp.json())
    .then((books) => setBooks(books))
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/librarylist">
          <LibraryList 
          allLibraries = {allLibraries}
          allBooks = {allBooks}
          />
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
