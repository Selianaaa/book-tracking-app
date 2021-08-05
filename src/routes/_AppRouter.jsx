import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Preloader } from '../components';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const SearchPage = React.lazy(() => import('../pages/SearchPage'));

export class AppRouter extends React.Component {
  render() {
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
                  books={this.props.books}
                  updateShelf={this.props.updateShelf}
                  showPreloader={this.props.showPreloader}
                />
              )}
            />
            <Route
              path="/search"
              render={(routerProps) => (
                <SearchPage
                  {...routerProps}
                  myBooks={this.props.books}
                  updateShelf={this.props.updateShelf}
                />
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
