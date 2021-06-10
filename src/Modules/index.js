import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

// Routes Component
import Auth from "Modules/Auth/Containers";
import Dashboard from "Modules/Dashboard/Containers";
import NotFound from "Components/NotFound";

const Routes = () => {
  const [token] = useSelector(({ auth: { token } }) => [token]);
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/auth" component={Auth} />
      <Route path="/not-found" component={NotFound} />
    </Switch>
  );
};

export default Routes;
