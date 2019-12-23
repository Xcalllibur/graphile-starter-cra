import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.less";

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
