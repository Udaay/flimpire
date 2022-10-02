import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export default makeStyles((theme: Theme) => ({
  searchContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
  searchIcon: {
    color: theme.palette.mode === "dark" ? "#20a4b2" : "#fff",
  },
  input: {
    color: theme.palette.mode === "dark" ? "black" : "white",
    filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10px",
      marginBottom: "10px",
    },
  },
}));
