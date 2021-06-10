import React from "react";
import { Switch, Route } from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";

const Auth = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={Signin} />
      <Route path={`${match.path}/signup`} component={Signup} />
    </Switch>
  );
};

export default Auth;
