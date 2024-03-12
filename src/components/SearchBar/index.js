import React, { useState } from 'react';
import axios from 'axios';
import loupe from '../imagens/loupe.png'
import './style.css'

//a search bar ja esta passando um array com todas as informações
//dos filmes com titulo igual ao da searchquery, olhe no console

const SearchBar = (props) => {

  const { onSearchResult } = props;

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api-2nwlsfl2uq-uw.a.run.app/searchTitulos', {
        params: {
          nome: searchQuery,
        },
      });
  
      const resultados = response.data;
      console.log(resultados);

      if (onSearchResult) {
        onSearchResult(resultados);
      }
      
    } catch (error) {
      console.error('Erro ao buscar títulos', error);
    }
  };
  
  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch}>
         <img src={loupe} alt="Pesquisar" />
      </button>


    </div>
  );
 }


export default SearchBar;