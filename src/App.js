import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//M-UI
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

//features
import Dashboard from "./dashboard/index";
import Users from "./users/index";
import Profile from "./profile/index";
import Candidates from "./candidates/index";
import Target from "./target/index";
import Login from "./auth/index";
//Utils
import PrivateRoute from "./utils/PrivateRoute";
//Redux setup
import store from "./redux/store";
import { Provider } from "react-redux";
import { SET_AUTHENTICATED } from "./auth/types";
import { logoutUser, getUserData } from "./auth/actions";
// Authentication setup
import jwtDecode from "jwt-decode";

import axios from "axios";

const token = localStorage.getItem("accessToken");
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    //FIXME:
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute exact path='/candidates' component={Candidates} />
              <PrivateRoute exact path='/users' component={Users} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/target' component={Target} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto Condensed",
  },
  palette: {
    primary: {
      main: "#6AAF06", //#6AAF06
      green: "#10991e",
      dark: "#101F25",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default App;
