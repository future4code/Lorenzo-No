import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";


export const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  tripList: "/trips/list",
  tripDetails: "/trips/details",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} exact />
        <Route path={routes.applicationForm} component={LoginPage} exact />
        <Route path={routes.login} component={LoginPage} exact />
        <Route path={routes.createTrip} component={LoginPage} exact />
        <Route path={routes.tripList} component={LoginPage} exact />
        <Route path={routes.tripDetails} component={LoginPage} exact />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
