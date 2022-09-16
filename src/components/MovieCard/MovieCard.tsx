import { Card, CardActionArea, CardContent, CardMedia, Box, Typography, Grid, Grow, Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { Movie } from "../../models/movieModel";
import useStyles from "./movieCardStyles";

function MovieCard({movieDetails, index}: {movieDetails : Movie, index: number}) {
  const { title, overview, poster_path, id, vote_average } = movieDetails;
  const classes = useStyles();
  const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://www.filmurray.com/200/300";
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movieCard}>
      <Grow in timeout={(index + 1) * 250} key={index}>
        <Link className={classes.link} to={`/movies/${id}`}>
          <img
            alt={title}
            src={imgSrc}
            className={classes.image}
          />
          <Typography className={classes.movieTitle} variant="h5">{title}</Typography>
          <Tooltip disableTouchListener title={vote_average / 10}>
            <Box>
              <Rating readOnly value={vote_average / 2} precision={0.1} />
            </Box>
          </Tooltip>
        </Link>
        {/* <Card>
          <CardActionArea>
            <CardMedia
              className={classes.moviePoster}
              component="img"
              height="200"
              image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="poster image"
            />
            <CardContent className={classes.movieContent}>
              <Typography variant="caption" component="p">
                {`Overview: ${overview}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}
      </Grow>
    </Grid>
  );
}

export default MovieCard;
