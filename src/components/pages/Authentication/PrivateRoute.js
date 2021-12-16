import React from "react";
import { Redirect, Route } from "react-router";
import Cookies from "universal-cookie";
const cookies = new Cookies();



export function PrivateRoute({ children, ...rest }) {
  
  
  const token = cookies.get('ariful')

  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
