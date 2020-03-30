import React, { useState, createContext } from "react";
import { useEffect } from "react";
import axios from "axios";
export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/4/discover/movie?api_key=340488322c6e681eabbf556225616435"
      )
      .then(res => setMovies([...res.data.results]))
      .catch(e => console.error(e));
  });

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
