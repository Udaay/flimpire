import React, { useEffect, useState } from "react";
import { CircularProgress, Box, useMediaQuery, Typography, Grid } from "@mui/material";
import { Selector, useSelector } from "react-redux";
import { MovieList } from "..";

import { useGetMoviesQuery } from "../../services/TMBD";
import { RootState } from "../../store";
import Pagination from "../Pagination/Pagination";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

export default function Movies() {
  const [page, setPage] = useState<number>(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state: RootState) => state.currentGenreOrCategory,
  );
  // const { searchQuery } = useSelector((state: RootState) => state.searchQuery);
  const { data, isFetching, error } = useGetMoviesQuery({genreIdOrCategoryName, page, searchQuery});

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
    <>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movieDetails={data} numberOfCards={19} excludeFirst />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </>
  );
}
