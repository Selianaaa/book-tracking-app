import React, { Fragment } from 'react';

import { HeaderFragment, SearchButton } from './fragments';
import { Shelf, Preloader } from '../../components';
import { shelfs } from '../../constants';
import './index.scss';

class HomePage extends React.Component {
  render() {
    const { showPreloader, books, updateShelf } = this.props;

    return (
      <div className="page">
        <HeaderFragment />

        <div className="content">
          {showPreloader ? (
            <div className="home_preloader">
              <Preloader />
            </div>
          ) : (
            <Fragment>
              {shelfs
                .filter((shelf) => shelf.value !== 'none')
                .map((shelf) => (
                  <Shelf
                    key={shelf.value}
                    showTitle
                    shelf={shelf}
                    books={books.filter((book) => book.shelf === shelf.value)}
                    updateShelf={updateShelf}
                  />
                ))}
            </Fragment>
          )}
        </div>

        <SearchButton />
      </div>
    );
  }
}

export default HomePage;
