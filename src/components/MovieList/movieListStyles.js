import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  moviePoster: {
    WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0, black), color-stop(0.35, black), color-stop(0.5, black), color-stop(0.65, black), color-stop(0.85, rgba(0, 0, 0, 0.6)), color-stop(1, transparent))",
  },
  movieContent: {
    // backgroundColor: "darkgray",
  },
}));
