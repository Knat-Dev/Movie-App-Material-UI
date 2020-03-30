import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import { Grid } from "@material-ui/core";

export default function MovieList() {
  const [movies] = useContext(MovieContext);
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      {movies.map(movie => (
        <Grid lg={3} md={4} sm={6} key={movie.id} item>
          <Movie {...movie} />
        </Grid>
      ))}
    </Grid>
  );
}
