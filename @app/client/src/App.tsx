import "./App.less";
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import NProgress from "nprogress";

import client from "./helpers/apolloClient";
import Routes from "./Routes";
import { HelmetProvider } from "react-helmet-async";

NProgress.configure({
  showSpinner: false,
});

const Loading: React.FC = () => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <ApolloProvider client={client}>
          <Router>
            <Suspense fallback={<Loading/>}>
              <Routes/>
            </Suspense>
          </Router>
        </ApolloProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
