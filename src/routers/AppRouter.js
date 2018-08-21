import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import BarDashboardPage from '../components/BarDashboardPage';
import createHistory from 'history/createBrowserHistory';
import AddBeerPage from '../components/AddBeerPage';
import EditBeerPage from '../components/EditBeerPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={BarDashboardPage} />
        <Route path="/create" component={AddBeerPage} />
        <Route path="/edit/:id" component={EditBeerPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
