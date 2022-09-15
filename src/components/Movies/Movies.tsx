import React, { useEffect, useState } from "react";
import { CircularProgress, Box, useMediaQuery, Typography, Grid } from "@mui/material";
import { Selector, useSelector } from "react-redux";
import { MovieList } from "..";

import { useGetMoviesQuery } from "../../services/TMBD";
import { RootState } from "../../store";

export default function Movies() {
  const [page, setPage] = useState<number>(1);
  const { genreIdOrCategoryName } = useSelector((state: RootState) => state.currentGenreOrCategory);
  const { data, isFetching, error } = useGetMoviesQuery({genreIdOrCategoryName, page});

  console.log(error, "err");
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data?.total_results) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match that name.
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h5">
        An Error has occured
      </Typography>
    );
  }

  return (
    data ? <MovieList movieDetails={data} /> : <></>
  );
}
