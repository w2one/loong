import React, { Suspense, lazy } from "react";
import { Loading } from "@components";
import { Route, Redirect, Switch } from "react-router-dom";
const First = lazy(() => import(/* webpackChunkName: "First" */ "./First"));
const Second = lazy(() => import(/* webpackChunkName: "Second" */ "./Second"));
function About(props) {
  const { path } = props.match;

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`${path}/`} component={First} />
          <Route path={`${path}/Second`} component={Second} />
          <Redirect to={`${path}/`} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default About;
