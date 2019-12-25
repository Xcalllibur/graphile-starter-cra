import "./App.less";
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import NProgress from "nprogress";

import client from "./helpers/apolloClient";
import Routes from "./Routes";

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
      <ApolloProvider client={client}>
        <Router>
          <Suspense fallback={<Loading/>}>
            <Routes/>
          </Suspense>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
