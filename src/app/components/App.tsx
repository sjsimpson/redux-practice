import React from "react";
import { ConnectedRouter } from 'connected-react-router';
import { Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";

import { ConnectCounterContainer } from "./ConnectCounter";
import { HookCounter } from "./HookCounter";
import { history } from "../store/history";

export const App = () => (
  <ConnectedRouter history={history}>
    <Router history={history}>
      <h1>Hello World! Updated (from GitLab, again)</h1>
      <div>
        <Link to="/connect-counter">ConnectCounter</Link>
      </div>
      <div>
        <Link to="/hook-counter">HookCounter</Link>
      </div>
      <Route
        exact
        path="/connect-counter"
        render={() => (<ConnectCounterContainer />)}
      />
      <Route
        exact
        path="/hook-counter"
        render={() => (<HookCounter />)}
      />
      {/* <Switch>
        <Route
          exact
          path="/connect-counter"
          component={ConnectCounterContainer}
        />
        <Route
          exact
          path="/hook-counter"
          component={HookCounter}
        />
      </Switch> */}
    </Router>
  </ConnectedRouter>
);
