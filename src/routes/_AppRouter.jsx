import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Preloader } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const SearchPage = React.lazy(() => import('../pages/SearchPage'));

export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
};
