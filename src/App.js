import React from 'react';
import * as BooksAPI from './BooksAPI';
import { AppRouter } from './routes';
import './App.scss';

class BooksApp extends React.Component {
  state = {
    books: [],
    showPreloader: false,
  };

  getMyBooks = () => {
    BooksAPI.getAll().then((response) => {
      console.log('getMyBooks: ', response);
      this.setState({ books: response });
    });
  };

  setBooks = (books) => {
    this.setState({
      books: books,
    });
  };

  componentDidMount() {
    this.getMyBooks();
  }

  render() {
    return (
      <div className="app">
        <AppRouter books={this.state.books} setBooks={this.state.setBooks} />
      </div>
    );
  }
}

export default BooksApp;
