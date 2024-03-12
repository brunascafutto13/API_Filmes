import './style.css'
import logo from '../../components/imagens/LOGO.png'
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import CarrosselFilmes from '../../components/CarrosselFilmes';
import { useAuth } from '../../components/AuthContext/AuthContext';
import ModalLogar from '../../components/ModalLogar';

const PopUpTitulo = ({item, FecharPop}) =>{

    const {logado, setLogado} = useAuth();
    
    const [InfosPop, setInfosPop] = useState(item);

    const AbrirPop = (item) => {
        setInfosPop(item);
    }

    const [favoritado, setFavoritado] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    
    
    const FecharModal = () => {
        setMostrarLogin(false);
    }

    // VARIAVEIS DA API //
    const imageUrl = `https://image.tmdb.org/t/p/w400/`;
    const titulo = InfosPop.titulo;
    const classif = InfosPop.classificacao_indicativa;
    const lancamento = InfosPop.ano;
    const tamanho = InfosPop.duracao;
    const genero = InfosPop.generos[0];
    const resumo = InfosPop.sinopse;
    const ator1 = InfosPop.elenco[0];
    const ator2 = InfosPop.elenco[1];
    const ator3 = InfosPop.elenco[2];
    const format = tamanho > 20? ' MINUTOS' : ' TEMPORADAS';
    // VARIAVEIS DA API //
    
    const Sair = (e) => {
        if(e.key === 'Escape'){
            FecharPop();
        }
    }

    const Favoritar = () => {
        if(!logado){
            setMostrarLogin(true);
            return;
        }
        setInfosPop(item);
      
        const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

        console.log({item})
        const requestData = {
            id: InfosPop.id.toString(),
            tipo: InfosPop.tipo,
            generos: InfosPop.generos,
        };

        fetch(basic_path+ '/postFavorite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            
            if (data.mensagem) {
                console.log(data.mensagem);
            } else if (data.erro) {
                if(data.erro === 'Título já está nos favoritos'){
                    alert('esse filme já estava favoritado');
                }
                console.error('Erro na solicitação:', data.erro);
            }
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
        setFavoritado(true);
    }

    const Desfavoritar = () => {
        setFavoritado(false);
      
        const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app";
      
        const requestData = {
          id: InfosPop.id.toString(),
        };
      
        fetch(basic_path + '/removeFavorite', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        })
          .then(response => response.json())
          .then(data => {
            if (data.mensagem) {
              console.log(data.mensagem);
            } else if (data.erro) {
              console.error('Erro na solicitação:', data.erro);
            }
          })
          .catch(error => {
            console.error('Erro na solicitação:', error);
          });
      };
      

    return(
        <div className='fundoDegrade-pop' tabIndex="0" onKeyDown={Sair}>
            {mostrarLogin? <ModalLogar FecharModal={FecharModal} nome='PARA FAVORITAR'/> : null}
            <div className={'conteudo-pop'}>
                <header className='header-logo'>
                    <div className='circle' onClick={FecharPop}>
                    </div>
                    
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                </header>
                <div className='titulo-infos'>
                    <div className='infos'>
                        <div className='variaveis'>
                            <span>{classif}</span>
                            <span>{'|'}</span>
                            <span>{lancamento}</span>
                            <span>{'|'}</span>
                            <span>{tamanho + format}</span>
                            <span>{'|'}</span>
                            <span>{genero}</span>             
                        </div>
                        <div className='variaveis'>
                            <span className='nome-titulo'>{titulo}</span>
                            <span className='nome-titulo'>{'|'}</span>
                            {favoritado ? 
                            (
                                <button className='estrela' onClick={Desfavoritar}> ★ </button>   
                            ) : 
                            (
                                <button className='botao-fav' onClick={Favoritar}>FAVORITAR</button>
                            )}
                        </div>
                        <div className='variaveis'>
                            <div className='resumo'>{resumo}</div>
                            <div className='linha-branca'></div>
                        </div>
                        <div className='variaveis'>
                            <span>ATORES</span>
                            <span>|</span>
                            <div className='atores'>
                                <span>{ator1} </span>
                                <span>{ator2} </span>
                                <span>{ator3} </span>
                            </div>
                        </div>
                    </div>
                    <div className='titulo-imagem'>
                        <img src={imageUrl + InfosPop.poster_path} alt={titulo} />
                    </div>
                </div>
                <div className='semelhantes'>
                    <span>SERIES / FILMES SEMELHANTES</span>
                    <CarrosselFilmes tipo={'titulos'} ano={'2022'} genero={genero} AbrirPop={AbrirPop}/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default PopUpTitulo;