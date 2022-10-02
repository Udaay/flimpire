import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",

    [theme.breakpoints.down("md")]: {
      flexFlow: "column wrap",
    },
  },
  containerFlexStart: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "10px 0 !important",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column wrap",
    },
  },
  containerSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0 !important",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column wrap",
    },
  },
  backDrop: {
    backgroundBlendMode: "darken",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    color: "#e3e3e3e8",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    marginTop: "0px !important",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column wrap",
      marginTop: "20px !important",
    },
  },
  imageWrapper: {
    display: "flex !important",
    flexFlow: "column nowrap !important",
    justifyContent: "center",
    alignItems: "center",
  },

  movieDetailsWrapper: {
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
      padding: "0 1rem",
      textAlign: "center",
    },
  },

  emptyIcon: {

  },

  genreIcon: {
    filter: "invert(100%) sepia(0%) saturate(7479%) hue-rotate(70deg) brightness(99%) contrast(107%)",
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgba(64,64,70)",
    width: "55%",

    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop: "40px",
      width: "100%",
      height: "350px",
      marginBottom: "30px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      marginTop: "40px",
      width: "100%",
      height: "350px",
    },
  },

  castList: {
    position: "relative",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      height: "4px",
      // background: 'transparent', /* make scrollbar transparent */
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.mode === "light" ? "#6bb5ee" : "#e75f69",
      // backgroundColor: "#6bb5ee",
      outline: "1px solid slategrey",
    },
  },

  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  video: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "90%",
    },
  },

}));
