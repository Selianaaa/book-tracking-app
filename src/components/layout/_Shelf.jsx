import React from 'react';
import PropTypes from 'prop-types';

import { BookCard } from '../cards';
import './_shelf.scss';

export class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.title}>
                <BookCard book={book} currentShelf={this.props.shelf.value} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};
