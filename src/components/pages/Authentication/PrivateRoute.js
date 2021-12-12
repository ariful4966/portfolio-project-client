import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getCookieUser } from "../../../redux/actions";
import Cookies from "universal-cookie";
import decode from 'jwt-decode'
const cookies = new Cookies();



export function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.user);
  
  
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
