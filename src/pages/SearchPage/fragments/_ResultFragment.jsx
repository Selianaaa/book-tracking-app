import React from 'react';

import { Preloader, BookCard } from '../../../components';
import './_result_fragment.scss';

export const ResultFragment = ({
  myBooks,
  result,
  updateShelf,
  showPreloader,
}) => {
  if (showPreloader) return <Preloader />;

  if (result.length > 0) {
    return (
      <div className="books">
        {result.map((book) => {
          const myBook = myBooks.find((myBook) => myBook.id === book.id);
          const bookShelf = myBook ? myBook.shelf : 'none';

          return (
            <BookCard
              key={book.id}
              book={book}
              currentShelf={bookShelf}
              updateShelf={updateShelf}
            />
          );
        })}
      </div>
    );
  }

  return <div className="empty_result">Nothing is found</div>;
};
