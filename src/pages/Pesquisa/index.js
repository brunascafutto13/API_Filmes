import React, { useState, useEffect } from 'react';
import CarrosselFilmesBusca from '../../components/CarrosselFilmesBusca';
import Generos from '../../components/Generos';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';
import SearchBar from '../../components/SearchBar';
import PopUpTitulo from '../PopUpTitulo';

const Pesquisa = (props) => {
  const [titulos, setTitulos] = useState([]);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [showNothingMessage, setShowNothingMessage] = useState(false);


  const handleSearchResult = (titulos) => {
    setTitulos(titulos);
    setShowInitialMessage(false); // Quando houver resultados, não mostrar mais a mensagem inicial.
    setShowNothingMessage(titulos.length === 0);
  };

  const [MostrarPop, setMostrarPop] = useState(false);
  const [InfosPop, setInfosPop] = useState(null);


  const AbrirPop = (item) => {
    setInfosPop(item);
    setMostrarPop(true);
  }

  const FecharPop = () => {
    setMostrarPop(false);
  }

  const [genero, setGenero] = useState('');

  return (
    <div className='fundoDegrade'>
      {MostrarPop? <PopUpTitulo item={InfosPop} FecharPop={FecharPop}/> : null}
      <Header />
      <SearchBar onSearchResult={handleSearchResult} />
      {showInitialMessage ? (
        <div className='Mensagem'>
          <text>Pesquise um título!</text>
        </div>
      ) : ""}
      {showNothingMessage ? (
        <div className='Mensagem'>
          <text>Nada encontrado!</text>
        </div>
      ) : (
        <CarrosselFilmesBusca data={titulos} tipo={props.tipo || 'titulos'} ano={'2023'} genero={genero} AbrirPop={AbrirPop} />
      )}
      <Footer />
    </div>
  );
};

export default Pesquisa;
