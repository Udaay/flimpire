import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10% 0",
  },

  image: {
    width: "70%",
  },
  divider: {
    margin: "0px",
    borderWidth: "0px 0px thin",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
  },

  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },

  genreImage: {
    marginRight: "1rem",
    filter: theme.palette.mode === "dark" ? "invert(1)" : "dark",
  },

  genreList: {
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "4px",
      // background: 'transparent', /* make scrollbar transparent */
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#6bb5ee",
      outline: "1px solid slategrey",
    },
  },
}));
