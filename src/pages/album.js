import React from 'react';
import Header from '../Components/Headers';

class Album extends React.Component {
  render() {
    return (
      <>
        <div data-testid="page-album" />
        <Header />
      </>
    );
  }
}
export default Album;
