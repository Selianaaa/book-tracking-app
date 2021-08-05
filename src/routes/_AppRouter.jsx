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
                  setBooks={this.props.setBooks}
                />
              )}
            />
            <Route
              path="/search"
              render={(routerProps) => (
                <SearchPage {...routerProps} setBooks={this.props.setBooks} />
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
// export default AppRouter;
// export const AppRouter = (books, setBooks) => {
//   console.log(books);
//   return (
//     <Router>
//       <Suspense fallback={<Preloader />}>
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={(props) => (
//               <HomePage {...props} books={books} setBooks={setBooks} />
//             )}
//           />
//           <Route path="/search" component={SearchPage} />
//           {/* <Route path="*" component={NotFound} /> */}
//         </Switch>
//       </Suspense>
//     </Router>
//   );
// };
