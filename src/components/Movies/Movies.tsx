import React, { useEffect } from "react";
import { CircularProgress, Box, useMediaQuery, Typography, Grid } from "@mui/material";
import { Selector } from "react-redux";
import { MovieList } from "..";

import { useGetMoviesQuery } from "../../services/TMBD";

export default function Movies() {
  const { data, isLoading } = useGetMoviesQuery();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Grid container justifyContent="center">
      {data?.results.map((movie) => (
        <MovieList key={movie.id} movieDetails={movie} />
      ))}
    </Grid>
  );
}
