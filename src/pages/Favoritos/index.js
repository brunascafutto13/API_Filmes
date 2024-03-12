import ListaFilmesFavoritos from '../../components/ListaFilmesFavoritos';
import { useEffect, useState } from 'react';
import Generos from '../../components/Generos';
import Header from '../../components/Header';
import Seletor from '../../components/Seletor';
import Footer from '../../components/Footer';
import PopUpTitulo from '../PopUpTitulo';
import './style.css';

const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app";

const getFavorites = async () => {
  try {
    const response = await fetch(basic_path + '/getFavorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log(data);

      return data;
    }
  } catch (error) {
    console.error("Houve um erro desconhecido", error);
    return [];
  }
}

const Favoritos = () => {
  const [filmeOuSerie, setFilmeouSerie] = useState('');
  const [MostrarPop, setMostrarPop] = useState(false);
  const [genero, setGenero] = useState('');
  const [InfosPop, setInfosPop] = useState('');
  const [visivel, setVisivel] = useState(true);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const favorites = await getFavorites();
        setFavoritos(favorites);

        // Verifique o tamanho da lista de favoritos e atualize o estado mostrarMensagem
        setMostrarMensagem(favorites.length === 0);
      } catch (error) {
        console.error('Houve um erro ao buscar os filmes favoritos:', error);
      }
    }

    fetchFavorites();
  }, []);

  const AbrirPop = (item) => {
    setInfosPop(item);
    setMostrarPop(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(function () {
      setVisivel(false);
    }, 800);
  }

  const FecharPop = () => {
    setMostrarPop(false);
    setVisivel(true);
  }

  return (
    <div className='fundoDegrade'>
      {MostrarPop ? <PopUpTitulo item={InfosPop} FecharPop={FecharPop} /> : null}
      <div className={visivel ? '' : 'invisivel'}>
        <Header />
        <div className='tela-favoritos'>
          <Seletor aoAlterado={valor => setFilmeouSerie(valor)} />
          <Generos Clique={valor => setGenero(valor)} />
        </div>
        {mostrarMensagem ? (
          <div className="msgne">
            Nenhum filme favorito encontrado
            </div>
        ) : (
          <ListaFilmesFavoritos favoritos={favoritos} AbrirPop={AbrirPop} />
        )}
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Favoritos;