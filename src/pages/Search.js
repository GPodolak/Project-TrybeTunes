/* eslint-disable react/no-unused-state */
// import { element } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Headers';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

// import Header from './components/Header';
// import App from "../App";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchBand: '',
      bandReturn: [],
      albumReturn: true,
      bandName: '',
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
   // codigo construido em conjunto com jessy cristina turma 22b
 }

 click = (element) => {
   element.preventDefault();
   const { searchBand } = this.state;
   this.setState({ loading: true });
   searchAlbumsAPI(searchBand).then((artist) => {
     this.setState({
       bandName: searchBand,
       searchBand: '',
       loading: false,
       bandReturn: artist,
       albumReturn: artist.length > 0,
     });
   });
 }

 render() {
   const {
     searchBand,
     searchButton,
     loading,
     bandReturn,
     albumReturn,
     bandName,
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
       { loading ? <p>Carregando...</p> : null }
       <div>
         { bandName && `Resultado de álbuns de: ${bandName}` }
         { albumReturn ? (bandReturn.map((artist) => (
           <Link
             key={ artist.collectionId }
             data-testid={ `link-to-album-${artist.collectionId}` }
             to={ `/album/${artist.collectionId}` }
           >
             <div>
               { artist.collectionName }
             </div>
           </Link>
         ))) : <p>Nenhum álbum foi encontrado </p>}
       </div>
     </div>
   );
 }
}

export default Search;
