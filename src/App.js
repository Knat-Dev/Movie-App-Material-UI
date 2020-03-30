import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/AddMovie";
import { createMuiTheme, CssBaseline, Button } from "@material-ui/core";
import { purple, blue } from "@material-ui/core/colors";
import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <CssBaseline />
        <Nav />
        <MovieList />
        <AddMovie />
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
