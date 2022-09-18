import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useGetWatchListQuery, useGetFavouriteListQuery } from "../../services/TMBD";

import { userSelector } from "../../features/auth";
import MovieList from "../MovieList/MovieList";

function Profile() {
  // const {user: userDetails} = useSelector((state: RootState) => state.user);
  const {user: userDetails, sessionId} = useSelector(userSelector);
  const {data: watchList} = useGetWatchListQuery({accountId: userDetails?.id, sessionId});
  const {data: favorite} = useGetFavouriteListQuery({accountId: userDetails?.id, sessionId});

  if (!watchList?.total_results && !favorite?.total_results) {
    return (
      <>
        <Typography variant="h3">{`Hi ${userDetails?.name.split(" ")[0]}`}</Typography>
        <Typography variant="h6">Add favorites or watchlist some movies to see them here! </Typography>
      </>
    );
  }

  return (
    <>
      <Typography variant="h3">{`Hi ${userDetails?.name.split(" ")[0]}`}</Typography>
      <Typography variant="body1">Your Watchlist</Typography>
      {watchList?.total_results
        ? <MovieList movieDetails={watchList} />
        : <>Your Watchlist is Empty</>}
      <Typography variant="body1">Your Favourites</Typography>
      {favorite?.total_results ? <MovieList movieDetails={favorite} /> : <>No Favourite</>}
    </>
  );
}

export default Profile;
