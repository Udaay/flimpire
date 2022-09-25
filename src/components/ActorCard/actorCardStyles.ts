import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export default makeStyles((theme: Theme) => ({
  cardContainer: {
    minWidth: "138px",
    width: "138px",
    // display: "flex",
    // flexFlow: "column nowrap",
    margin: "10px",
    // border: "1px solid rgb(227,227,227)",
    // borderRadius: "1rem",
    overflow: "hidden",
    color: "#e3e3e3e8 !important",
    backgroundColor: "transparent !important",
  },
  imageWrapper: {
    minWidth: "138px",
    width: "138px",
    height: "175px",
    display: "block",
  },
  actorImg: {
    width: "100%",
    height: "100%",
    opacity: "0.8",
    borderRadius: "0.7rem",
  },
  actorName: {
    fontWeight: "700 !important",
    paddingTop: "8px",
    textAlign: "center",
    lineHeight: "1rem !important",
  },
  characterName: {
    fontWeight: 400,
    paddingTop: "8px",
    textAlign: "center",
    lineHeight: "1rem !important",
  },
}));
