import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BarDashboardPage from '../components/BarDashboardPage';
import AddBeerPage from '../components/AddBeerPage';
import EditBeerPage from '../components/EditBeerPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BarDashboardPage} exact={true} />
        <Route path="/create" component={AddBeerPage} />
        <Route path="/edit/:id" component={EditBeerPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
