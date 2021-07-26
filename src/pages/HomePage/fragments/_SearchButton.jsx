import React from 'react';
import { Link } from 'react-router-dom';

import './_search_button.scss';

export const SearchButton = () => (
  <Link className="search_button" to="/search">
    Add a book
  </Link>
);
