import CarrosselFilmes from '../../components/CarrosselFilmes';
import Carrossel from '../../components/Carrossel'
import Generos from '../../components/Generos';
import Header from '../../components/Header';
import {useState } from 'react';

import './style.css'
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import PopUpTitulo from '../PopUpTitulo';


const Home = (props) => {
  const [genero, setGenero] = useState('');
  // Use props.tipo em vez de criar uma variável 'tipo'
  console.log(props.tipo);

  const [MostrarPop, setMostrarPop] = useState(false);
  const [InfosPop, setInfosPop] = useState(null);

  const AbrirPop = (item) => {
    setInfosPop(item);
    setMostrarPop(true);
  };

  const FecharPop = () => {
    setMostrarPop(false);
  }

  const Sair = (e) => {
    if(e.key === 'Escape'){
        FecharPop();
    }
  } 

  return (
    <div className='fundoDegrade' tabIndex="0" onKeyDown={Sair}>
      {MostrarPop? <PopUpTitulo item={InfosPop} FecharPop={FecharPop}/> : null}
        <Header />
        <Carrossel />
        <Generos Clique={valor => setGenero(valor)} />
        <text>2023</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2023'} genero={genero} AbrirPop={AbrirPop} />
        <text>2022</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2022'} genero={genero} AbrirPop={AbrirPop} />
        <text>2021</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2021'} genero={genero} AbrirPop={AbrirPop} />
        <text>2020</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2020'} genero={genero} AbrirPop={AbrirPop} />
        <text>2019</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2019'} genero={genero} AbrirPop={AbrirPop} />
        <text>2018</text>
        <CarrosselFilmes tipo={props.tipo || 'titulos'} ano={'2018'} genero={genero} AbrirPop={AbrirPop} />
      </div>
  );
}

export default Home;