import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <CssBaseline />
        <Nav />
        <Container>
          <MovieList />
          <AddMovie />
        </Container>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
