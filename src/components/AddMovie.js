import React, { useState, useContext } from "react";
import { uuid } from "uuidv4";
import { MovieContext } from "./MovieContext";
export default function AddMovie() {
  const [state, setState] = useState({
    name: "",
    price: ""
  });
  const [, setMovies] = useContext(MovieContext);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      {
        name,
        price,
        id: uuid()
      }
    ]);
  };

  const { name, price } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="text" name="price" value={price} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
