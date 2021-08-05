import React from 'react';
import PropTypes from 'prop-types';

import { shelfs } from '../../constants';
import './_book_card.scss';

const noCoverImage =
  'https://i.ebayimg.com/thumbs/images/g/~V8AAOSw1oJdMTOQ/s-l96.jpg';

export class BookCard extends React.Component {
  render() {
    const bookHasCover =
      this.props.book.imageLinks && this.props.book.imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="top">
          <div
            className="cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                bookHasCover
                  ? this.props.book.imageLinks.thumbnail
                  : noCoverImage
              })`,
            }}
          ></div>
          <div className="shelf_changer">
            <select
              value={this.props.currentShelf}
              onChange={(e) =>
                this.props.updateShelf(this.props.book, e.target.value)
              }
            >
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
        {this.props.book.authors && (
          <div className="book_authors">
            {this.props.book.authors.map((author, index) => (
              <span key={index}>{author}</span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  currentShelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
};
