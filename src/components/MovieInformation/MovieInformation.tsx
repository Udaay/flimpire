/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef, useState } from "react";

import { Modal, Typography, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from "@mui/material";
import { Bookmark, Favorite, ArrowBack, BookmarkRemove, FavoriteBorderOutlined} from "@mui/icons-material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { styled } from "@mui/styles";
import { useGetListQuery, useGetMovieDetailsQuery, useGetRecommendedMoviesQuery } from "../../services/TMBD";
import useStyles from "./movieInfoStyles";
import ActorCard from "../ActorCard/ActorCard";
import useHorizontalScroll from "../../custom-hooks/HorizontalScroll";
import CustomIconButton from "../../custom-components/CustomIconButton";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import MovieList from "../MovieList/MovieList";
import genresIcon from "../../assets/genres";
import { userSelector } from "../../features/auth";

function MovieInformation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollHori = useHorizontalScroll() as unknown as React.MutableRefObject<HTMLInputElement>;

  const { user, sessionId } = useSelector(userSelector);
  const { id } = useParams();

  const { data, isFetching, error } = useGetMovieDetailsQuery({id});
  const { data: recommendedMovies } = useGetRecommendedMoviesQuery({id});
  const {data: watchlistMovies} = useGetListQuery({accountId: user?.id, sessionId, list: "watchlist"});
  const {data: favoriteMovies} = useGetListQuery({accountId: user?.id, sessionId, list: "favorite"});

  const [open, setOpen] = useState(false);
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

  useEffect(() => {
    setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [favoriteMovies, data]);

  useEffect(() => {
    setIsMovieWatchlisted(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [watchlistMovies, data]);

  const addToFavorites = async () => {
    if (!user) return;
    await axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMBD_KEY}&session_id=${localStorage.getItem("session_id")}`, {
      media_type: "movie",
      media_id: id,
      favorite: !isMovieFavorited,
    });

    setIsMovieFavorited((prev) => !prev);
  };

  const addToWatchList = async () => {
    if (!user) return;
    await axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMBD_KEY}&session_id=${localStorage.getItem("session_id")}`, {
      media_type: "movie",
      media_id: id,
      watchlist: !isMovieWatchlisted,
    });

    setIsMovieWatchlisted((prev) => !prev);
  };

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="/"> Something has gone wrong -Go Back </Link>
    </Box>;
  }
  return (
    <div>
      <Grid
        container
        className={`${classes.containerSpaceAround} ${classes.backDrop}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})`,
        }}
      >
        <Grid item sm={12} lg={4} className={classes.imageWrapper}>
          <img
            alt="Movie Poster"
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          />
          <ButtonGroup style={{opacity: 0.9, marginTop: "2rem"}}>
            <CustomIconButton onClick={addToFavorites} title={isMovieFavorited ? "Remove from favorites" : "Mark as favorite"}>
              <Favorite htmlColor={isMovieFavorited ? "#f56807" : "#e3e3e3e8"} />
            </CustomIconButton>
            <CustomIconButton onClick={addToWatchList} title={isMovieWatchlisted ? "Remove from watchlist" : "Add to your watchlist"}>
              {isMovieWatchlisted ? <BookmarkRemove htmlColor="#f56807" /> : <Bookmark htmlColor="#e3e3e3e8" />}
            </CustomIconButton>
            <CustomIconButton onClick={() => setOpen(true)} title="Play Trailer">
              <PlayCircleFilledIcon htmlColor="#e3e3e3e8" />
            </CustomIconButton>
          </ButtonGroup>
        </Grid>
        <Grid item container direction="column" lg={7} justifyContent="space-between" wrap="nowrap">
          <Box className={classes.movieDetailsWrapper}>

            <Typography variant="h3" fontSize="35px" fontWeight="700" component="span">
              {data?.title}
              <Typography variant="h3" fontWeight="400" fontSize="35px" component="span">
                ({data?.release_date.split("-")[0]})
              </Typography>
            </Typography>

            <Grid item container className={classes.containerSpaceBetween}>
              <Typography variant="h5">
                {`${data?.runtime}mins / ${data?.release_date} / ${data?.spoken_languages[0].english_name}`}
              </Typography>
              <Box display="flex">
                {
                data?.vote_average
                  ? (
                    <>
                      <Rating size="large" readOnly value={data.vote_average / 2} className={classes.emptyIcon} />
                      <Typography variant="h6">{`${data.vote_average}/10`}</Typography>
                    </>
                  )
                  : null
            }
              </Box>

            </Grid>

            <Grid item container className={classes.containerSpaceAround}>
              {data?.genres.map((genre) => (
                <Link
                  to="/"
                  onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    textAlign: "center",
                  }}
                >
                  <img src={genresIcon[genre.name.toLowerCase()]} alt="genreIcon" height={30} className={classes.genreIcon} />
                  <Typography variant="h6">{genre.name}</Typography>
                </Link>
              ))}
            </Grid>
            <Typography fontStyle="italic" fontWeight="600" variant="h5" gutterBottom>
              {data?.tagline}
            </Typography>
            <Typography variant="h5">Overview</Typography>
            <Typography variant="subtitle1">{data?.overview}</Typography>
          </Box>
          <Grid item container className={classes.containerSpaceAround}>

            <CustomIconButton onClick={() => navigate(-1)} title="back to previous page"><ArrowBack htmlColor="#e3e3e3e8" /></CustomIconButton>
          </Grid>

          <Box>
            <Typography style={{paddingLeft: "1rem"}} variant="h5">Top Billed Cast</Typography>
            <Grid
              ref={scrollHori}
              item
              container
              direction="row"
              wrap="nowrap"
              className={classes.castList}
            >
              {
            data?.credits.cast
              ? <ActorCard casts={data.credits.cast} />
              : null
          }
            </Grid>
          </Box>
        </Grid>

      </Grid>
      <Grid container justifyContent="center" alignItems="center" marginTop="2rem" flexDirection="column">
        <Typography variant="h3" gutterBottom>You might also like</Typography>
        {recommendedMovies && recommendedMovies.total_results !== 0
          ? <MovieList movieDetails={recommendedMovies} numberOfCards={12} />
          : <Typography variant="h5" component="p">Sorry, Nothing was Found</Typography>}
      </Grid>
      <Modal
        closeAfterTransition
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        {(data && data?.videos?.results?.length > 0)
          ? (
            <iframe
              className={classes.video}
              frameBorder="0"
              title="Trailer"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : <></>}
      </Modal>
    </div>
  );
}

export default MovieInformation;
