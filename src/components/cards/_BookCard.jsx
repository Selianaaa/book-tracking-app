import React from 'react';
import PropTypes from 'prop-types';

import { shelfs } from '../../constants';
import './_book_card.scss';

export class BookCard extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="top">
          <div
            className="cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="shelf_changer">
            <select value={this.props.currentShelf}>
              <option value="move" disabled>
                Move to...
              </option>

              {shelfs.map((shelf) => (
                <option key={shelf.value} value={shelf.value}>
                  {shelf.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book_title">{this.props.book.title}</div>
        <div className="book_authors">{this.props.book.author}</div>
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};
