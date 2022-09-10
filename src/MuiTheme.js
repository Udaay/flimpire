import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "#74b9ff",
          zIndex: 1,
        },
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: "0px",
        },
      },
    },
  },
});
