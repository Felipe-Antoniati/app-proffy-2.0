import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Recovery from "../pages/Recovery";
import Landing from "../pages/Landing";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recovery" component={Recovery} />
        <Route path="/landing" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
