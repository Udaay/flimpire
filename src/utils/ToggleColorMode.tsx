/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import CommonTheme from "../MuiTheme";

export const ColorModeContext = createContext<any>({} as any);

function ToggleColorMode({ children } : any) {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () => {
    console.log("hiiiiii");
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  let theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  theme = createTheme(theme, {
    typography: {
      fontFamily: "'Source Sans Pro', sans- serif",
    },
    components: {
      MuiListSubheader: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.mode === "light" ? "#74b9ff" : "#DD1A28",
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

      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.mode === "light" ? "#6bb5ee" : "#e75f69",
              outline: "1px solid slategrey",
            },
          },
        },
      },
    },
  });

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
