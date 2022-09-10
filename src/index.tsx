import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import App from "./components/App";

import theme from "./MuiTheme";
import store from "./store";
// import './'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
