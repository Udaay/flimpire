import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      marginLeft: "0",
    },
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // these styles will be applied to all devices that are higher than the small devices
    // in-short it will not applied to sm devices
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  LinkButton: {
    "&:hover": {
      color: "#fff !important",
    },
  },
  drawer: {
    position: "relative",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      overflowY: "hidden",
    },
  },
  drawerBackground: {},
  imageLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10% 0",
  },
}));
