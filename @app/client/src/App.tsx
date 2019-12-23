import "nprogress/nprogress.css";
import "./App.less";
import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NProgress from "nprogress";


const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

NProgress.configure({
  showSpinner: false,
});

const Loading: React.FC = () => {
  useEffect(() => {
    console.log('Start')
    NProgress.start();
    return () => {
      console.log('Stop')
      NProgress.done();
    };
  }, []);

  return null;
};

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

          <Suspense fallback={<Loading/>}>
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
