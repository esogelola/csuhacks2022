import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import NotFound from "../pages/NotFound";
import Journal from "../pages/Journal";
import Recommendations from "../pages/Recommendations";
import Resources from "../pages/Resources";
import Statistics from "../pages/Statistics";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Layout from "./Layout";
function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          //Layout and sidebar can now receive props
          <Layout {...props}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />

              <Route path="/resources" exact component={Resources} />
              <Route path="/journal" component={Journal} />
              <Route path="/stats" component={Statistics} />
              <Route path="/recommendation" component={Recommendations} />
              <Route path="/" component={Landing} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
