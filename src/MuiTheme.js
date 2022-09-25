import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans- serif",
  },
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

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.575)",
          color: "white",
          // border: "1px solid #dadde9",
          fontSize: "14px",
          paddingInline: "8px 8px",
        },
        arrow: {
          color: "pink",
        },
      },
    },
  },
});
