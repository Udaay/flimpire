import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movieCard: {
    padding: "10px",
    // height: "300px",

  },
  moviePoster: {
    WebkitMaskImage: "-webkit-gradient(linear, left top, left bottom, color-stop(0, black), color-stop(0.35, black), color-stop(0.5, black), color-stop(0.65, black), color-stop(0.85, rgba(0, 0, 0, 0.6)), color-stop(1, transparent))",
  },
  movieContent: {
    // backgroundColor: "darkgray",
  },
  link: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },

  },
  image: {
    height: "300px",
    borderRadius: "1.2rem",
    marginBottom: "1rem",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  movieTitle: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "0",
    textAlign: "center",
  },
}));
