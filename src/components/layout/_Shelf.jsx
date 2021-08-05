import React from 'react';
import PropTypes from 'prop-types';

import { BookCard } from '../cards';
import './_shelf.scss';

export class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf_wrapper">
        {this.props.showTitle && (
          <h2 className="bookshelf_title">{this.props.shelf.title}</h2>
        )}

        <div className="bookshelf_books">
          {this.props.books.map((book) => (
            <div key={book.title} className="bookshelf_book">
              <BookCard book={book} currentShelf={this.props.shelf.value} />
            </div>
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
