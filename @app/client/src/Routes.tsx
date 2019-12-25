import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes;
