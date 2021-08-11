import React from 'react';
import PropTypes from 'prop-types';

import { BookCard } from '../cards';
import './_shelf.scss';

export class Shelf extends React.Component {
  render() {
    const { showTitle, shelf, books, updateShelf } = this.props;

    return (
      <div className="bookshelf_wrapper">
        {showTitle && <h2 className="bookshelf_title">{shelf.title}</h2>}

        <div className="bookshelf_books">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              currentShelf={shelf.value}
              updateShelf={updateShelf}
            />
          ))}
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
  books: PropTypes.array.isRequired,
};
