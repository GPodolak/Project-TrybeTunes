import React from 'react';
import Header from '../Components/Headers';
// import getMusic from '../services/musicsAPI';

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
