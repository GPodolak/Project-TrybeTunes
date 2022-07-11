// import { render } from '@testing-library/react';
import React from 'react';
import Header from '../Components/Headers';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
      </div>
    );
  }
}

export default Favorites;
