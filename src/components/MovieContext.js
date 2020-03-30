import React, { useState, createContext } from "react";
import { uuid } from "uuidv4";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10$",
      id: uuid()
    },
    {
      name: "Game of Thrones",
      price: "10$",
      id: uuid()
    },
    {
      name: "Lord of the Rings: The fellowship of the ring",
      price: "10$",
      id: uuid()
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
