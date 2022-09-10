import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../../models/movieModel";

function MovieList({movieDetails}: {movieDetails : Movie}) {
  const { title, overview, poster_path } = movieDetails;
  return (
    <Card sx={{maxWidth: 320, margin: "0.5rem"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster image"
        />
        <CardContent>
          <Typography variant="h6">{`Title: ${title}`}</Typography>
          <Typography variant="caption" component="p">
            {`Overview: ${overview}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieList;
