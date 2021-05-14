import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import requireAuth from './wrappers/RequireAuth';
import redirectLoggedIn from './wrappers/RedirectLoggedIn';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={redirectLoggedIn(App)} />
        <Route exact path="/register" component={redirectLoggedIn(Register)} />
        <Route exact path="/login" component={redirectLoggedIn(Login)} />
        <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
