import React from 'react';
import * as BooksAPI from './BooksAPI';
import { AppRouter } from './routes';
import './App.scss';

class BooksApp extends React.Component {
  state = {
    books: [],
    showPreloader: false,
  };

  getMyBooks = (preload) => {
    if (preload) this.setState({ showPreloader: true });

    BooksAPI.getMyBooks().then((response) => {
      if (preload) this.setState({ showPreloader: false });
      this.setState({ books: response });
    });
  };

  setBooks = (books) => {
    this.setState({
      books: books,
    });
  };

  componentDidMount() {
    this.getMyBooks(true);
  }

  updateShelf = (book, shelf) => {
    BooksAPI.updateMyBooks(book, shelf).then(() => {
      this.getMyBooks(false);
    });
  };

  render() {
    const { books, showPreloader } = this.state;

    return (
      <div className="app">
        <AppRouter
          books={books}
          updateShelf={this.updateShelf}
          showPreloader={showPreloader}
        />
      </div>
    );
  }
}

export default BooksApp;
