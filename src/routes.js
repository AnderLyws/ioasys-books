import React, { useContext } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Context } from './hooks/AuthContext';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Router>
      <Switch>
        <CustomRoute exact path="/" component={Login} />
        <CustomRoute isPrivate="/home" component={Home} />
      </Switch>
    </Router>
  );
}