import React from 'react';
import Header from '../Components/Headers';
// import Header from './components/Header';
// import App from "../App";

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="searchBand">
            <input
              type="text"
              data-testid="search-artist-input"
              name="searchBand"
              id="user"
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.handleClick }
            disabled={ searchButtonDisabled }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
