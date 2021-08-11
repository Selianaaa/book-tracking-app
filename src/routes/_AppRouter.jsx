import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Preloader } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const SearchPage = React.lazy(() => import('../pages/SearchPage'));

export class AppRouter extends React.Component {
  render() {
    const { showPreloader, books, updateShelf } = this.props;

    return (
      <Router>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <HomePage
                  {...routerProps}
                  books={books}
                  updateShelf={updateShelf}
                  showPreloader={showPreloader}
                />
              )}
            />
            <Route
              path="/search"
              render={(routerProps) => (
                <SearchPage
                  {...routerProps}
                  myBooks={books}
                  updateShelf={updateShelf}
                />
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
