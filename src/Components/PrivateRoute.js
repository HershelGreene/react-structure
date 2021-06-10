import React from "react";
import { Redirect } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  return <Route {...rest} render={() => (auth.token ? children : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
