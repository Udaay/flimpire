import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { PopularMovies } from "../../models/movieModel";
import MovieCard from "../MovieCard/MovieCard";
import useStyles from "./movieListStyles";

function MovieList({movieDetails}: {movieDetails : PopularMovies}) {
  const { results } = movieDetails;
  console.log(useStyles);
  return (
    <Grid container justifyContent="center">
      {results.map((movieDetail, i) => (
        <MovieCard key={movieDetail.id} movieDetails={movieDetail} index={i} />
      ))}
    </Grid>
  );
}

export default MovieList;
