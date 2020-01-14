import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";




const routes = {
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
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.applicationForm} component={LoginPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.createTrip} component={LoginPage} />
        <Route path={routes.tripList} component={LoginPage} />
        <Route path={routes.tripDetails} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
