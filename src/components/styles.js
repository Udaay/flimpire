import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    fontFamily: "'Source Sans Pro', sans- serif",
  },
  toolbar: {
    height: "64px",
  },
  content: {
    flexGrow: "1",
    // padding: "2rem",
    overflowX: "hidden",
  },
}));
