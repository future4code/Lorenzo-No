import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import TripList from "../TripList";
import TripDetails from "../TripDetails";
import ApplicationForm from "../ApplicationForm";
import CreateTrip from "../CreateTrip";
import HomePage from "../HomePage";


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
        <Route path={routes.root} component={HomePage} exact />
        <Route path={routes.applicationForm} component={ApplicationForm} exact />
        <Route path={routes.login} component={LoginPage} exact />
        <Route path={routes.createTrip} component={CreateTrip} exact />
        <Route path={routes.tripList} component={TripList} exact />
        <Route path={routes.tripDetails} component={TripDetails} exact />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
