/* eslint-disable react/no-unused-state */
// import { element } from 'prop-types';
import React from 'react';
import Header from '../Components/Headers';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
// import Header from './components/Header';
// import App from "../App";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBand: '',
      searchButton: true,
    };
  }

 InputChange =(event) => {
   const { name, value } = event.target;
   const CHARACTER = 2;
   this.setState({ [name]: value });
   const { searchBand } = this.state;
   if (searchBand < CHARACTER) {
     return this.setState({ searchButton: true });
   } return this.setState({ searchButton: false });
   //  this.setState({
   //    searchBand: value,
   //    searchButton: value.length > CHARACTER,
 }

 click = (element) => {
   element.preventDefault();
   const { searchBand } = this.state;
   this.setState({ loading: true });
   searchAlbumsAPI(searchBand).then((artist) => {
     this.setState({
       artName: searchBand,
       searchBand: '',
       loading: false,
       returnBand: artist,
       returnAlbum: artist.length > 0,
     });
   });
 }

 render() {
   const { searchBand,
     searchButton,
   } = this.state;
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
             value={ searchBand }
             placeholder="Artist or Songs"
             onChange={ this.InputChange }
           />
         </label>
         <button
           type="submit"
           data-testid="search-artist-button"
           onClick={ this.click }
           disabled={ searchButton }
         >
           Pesquisar
         </button>
       </form>
     </div>
   );
 }
}

export default Search;
