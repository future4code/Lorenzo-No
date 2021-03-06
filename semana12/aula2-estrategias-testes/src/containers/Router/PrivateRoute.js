import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from './auth'
import routes from './index'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
        )
      }
    />
);