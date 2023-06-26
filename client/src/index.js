import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import { Provider } from 'react-redux';

import App from './App';
import theme from './assets/styles/Theme';
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);