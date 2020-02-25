import React from "react";
import { Route, Redirect } from "react-router-dom";
import { get } from "lodash";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...rest }) {
  const data = useSelector(state => get(state, "auth.data", {}));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data.id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
