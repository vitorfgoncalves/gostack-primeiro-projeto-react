import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Repository from '../Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
