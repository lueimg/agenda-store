import React, { Component } from 'react';
import './App.css';
import "./assets/css/flex.css"
import "./assets/css/helpers.css"

import Main from "./modules/main";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "./modules/shared/ui/NoMatch";
import PrivateSection from "./modules/shared/ui/PrivateSection";

import Login from "./modules/auth/Login";
import Logout from './modules/auth/Logout';


class App extends Component {

  redirectTo404 = () => {
    return <Redirect to="/404" />
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/404" component={NoMatch} />
            <PrivateSection>
              <Route exact path="/logout" component={Logout} />
              <Route path="/" component={Main} />
            </PrivateSection>
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
