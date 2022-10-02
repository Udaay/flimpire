/* eslint-disable react/require-default-props */
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { MoviesResult } from "../../models/movieModel";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps {
  movieDetails : MoviesResult,
  excludeFirst?: boolean;
  numberOfCards?: number
}

function MovieList({movieDetails, numberOfCards = 20, excludeFirst = false}: MovieListProps) {
  const { results} = movieDetails;
  const startRange = excludeFirst ? 1 : 0;
  return (
    <Grid container justifyContent="center">
      {results.slice(startRange, numberOfCards).map((movieDetail, i) => (
        <MovieCard key={movieDetail.id} movieDetails={movieDetail} index={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
