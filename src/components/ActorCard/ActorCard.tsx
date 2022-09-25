import { Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import useStyles from "./actorCardStyles";
import {Cast} from "../../models/movieDetails";

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

export default function ActorCard(props: { casts : Cast[] }) {
  const { casts } = props;
  const classes = useStyles();
  return (
    <>
      {casts.map((cast) => (
        <Paper key={cast.id} elevation={1} className={classes.cardContainer}>
          <CustomLink to={`/actors/${cast.id}`}>
            <Grid item className={classes.imageWrapper}>
              <img
                className={classes.actorImg}
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                alt={cast.name}
              />
            </Grid>
          </CustomLink>
          <Typography variant="body1" component="p" className={classes.actorName}>
            <CustomLink to={`/actors/${cast.id}`}>
              {cast.name}
            </CustomLink>
          </Typography>
          <Typography className={classes.characterName}>{cast.character}</Typography>
        </Paper>

      ))}
    </>
  );
}
