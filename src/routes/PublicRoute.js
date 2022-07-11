import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/index";

function PublicRoute({ component: Component, restricted = false, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && restricted ? (
          <Redirect to={"/"} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
