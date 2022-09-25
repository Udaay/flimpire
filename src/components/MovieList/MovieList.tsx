/* eslint-disable react/require-default-props */
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { MoviesResult } from "../../models/movieModel";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  movieDetails : MoviesResult,
  numberOfCards?: number
}

function MovieList({movieDetails, numberOfCards = 20}: MovieListProps) {
  const { results} = movieDetails;
  return (
    <Grid container justifyContent="center">
      {results.slice(0, numberOfCards).map((movieDetail, i) => (
        <MovieCard key={movieDetail.id} movieDetails={movieDetail} index={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
