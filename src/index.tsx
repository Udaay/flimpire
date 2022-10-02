import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import App from "./components/App";

import theme from "./MuiTheme";
import store from "./store";
// import { ColorModeContext } from "./utils/ToggleColorMode";
import ToggleColorMode from "./utils/ToggleColorMode";

// import './'

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,
  document.getElementById("root"),
);
