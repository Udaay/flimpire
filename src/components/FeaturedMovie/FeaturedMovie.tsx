import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./featureCardStyles";
import { Movie } from "../../models/movieModel";

function FeaturedMovie({ movie } : {movie: Movie}) {
  const classes = useStyles();

  if (!movie) return null;

  return (
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.featuredCardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding="20px">
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography variant="h5" gutterBottom>{movie.title}</Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

export default FeaturedMovie;
