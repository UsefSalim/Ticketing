import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import Store from "./redux/configStore";
import { Provider } from "react-redux";
import theme from "./components/Style/theme";
ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
