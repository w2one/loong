/**
 * root container
 */
import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Loading from "@components/Loading";

// lazy load
const Login = lazy(() => import(/* webpackChunkName: "login" */ "./Login"));
const Main = lazy(() => import(/* webpackChunkName: "main" */ "./Main"));

function App(props) {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={`/login`} component={Login} />
          <PrivateRoute path={`/`} component={Main} {...props} />
        </Switch>
      </Suspense>
    </Router>
  );
}

/**
 * private route
 */
class PrivateRoute extends React.Component {
  render() {
    let { component: Component, token, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token
});

export default connect(mapStateToProps)(App);
