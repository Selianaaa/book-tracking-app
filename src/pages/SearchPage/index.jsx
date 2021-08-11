import React from 'react';

import { ResultFragment, SearchFragment } from './fragments';
import * as BooksAPI from '../../BooksAPI';
import './index.scss';

class SearchPage extends React.Component {
  state = {
    searchValue: '',
    result: [],
    timeout: 0,
    showPreloader: false,
  };

  searchBooks = (searchValue) => {
    if (searchValue.length > 0) {
      this.setState({ showPreloader: true });

      BooksAPI.searchBooks(searchValue).then((data) => {
        this.setState({ showPreloader: false });

        if (Array.isArray(data)) {
          return this.setState({ result: data });
        }

        return this.setState({ result: [] });
      });
    }
  };

  debounceSearch = (event) => {
    const value = event.target.value;

    this.setState({ searchValue: value });

    if (value.length < 1) {
      return this.setState({ result: [] });
    }

    clearTimeout(this.state.timeout);

    const timeout = setTimeout(() => {
      this.searchBooks(value);
    }, 700);

    this.setState({
      timeout: timeout,
    });
  };

  render() {
    const { myBooks, updateShelf } = this.props;

    return (
      <div className="page">
        <SearchFragment
          searchValue={this.state.searchValue}
          debounceSearch={this.debounceSearch}
        />

        <div className="search_results">
          <ResultFragment
            myBooks={myBooks}
            result={this.state.result}
            showPreloader={this.state.showPreloader}
            updateShelf={updateShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
