import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import FourOhFour from './routes/404';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route>
        <FourOhFour />
      </Route>
    </Switch>
  )
}

export default Routes;
