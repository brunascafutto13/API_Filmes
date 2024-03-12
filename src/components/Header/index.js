import React, {useState} from 'react'
import './style.css'
import logo from '../imagens/LOGO.png';
import loupe from '../imagens/loupe.png'
import { NavLink, useLocation} from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import ModalLogar from '../ModalLogar';
const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"


const Header = () =>{
  const {logado, setLogado} = useAuth();
  const pagina = useLocation(); // função importada do react-router
  const pageAtual = pagina.pathname;
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  const PopUp = () => {
    setMostrarPopUp(!mostrarPopUp);
  }

  const paginaSelecionada = (link) => {
    if(link === '/dados'){
      if(pageAtual === '/dados-detalhes-conta' || pageAtual === '/dados-alterar-senha' || pageAtual === '/dados-alterar-email'){
        return 'selected';
      }
    }
    return pageAtual === link ? 'selected' : ''; //pagina.pathname retorna o nome da página, se for igual ao passado pelo parâmetro, quer dizer que a página está selecionada, então recebera a classe selected.
  };

  const Deslogar = async () => {
  //Integração back-end
  try{
      
      const response = await fetch(basic_path+ '/logout', {
      method: 'POST',
      });

      console.log(response)
  // Verificando se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }else{
        console.log("Logout realizado com sucesso");
      }
  } catch (error) {
  console.error("Houve um erro desconhecido", error);
  return [];
  }

  setLogado(false)
  localStorage.removeItem('logado');
  window.location.href = "/";
  }
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const FecharModal = () => {
    setMostrarLogin(false);
  }

  const AbrirModal = () => {
    if(!logado){
      setMostrarLogin(true);
    }
  }

  const ImpedeFavorito = logado? "/favoritos" : pageAtual;
  
  return(
    <header className='header-component'>
        {mostrarLogin? <ModalLogar FecharModal={FecharModal} nome='PARA VER FAVORITOS'/> : null}
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={paginaSelecionada("/")}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/filmes"} className={paginaSelecionada("/filmes")}>
              FILMES
            </NavLink>
          </li>
          <li>
            <NavLink to={"/series"} className={paginaSelecionada("/series")}>
              SERIES
            </NavLink>
          </li>
          <li className='fav'>
            <NavLink to={ImpedeFavorito} className={paginaSelecionada("/favoritos")}>
              <div onClick={AbrirModal}>FAVORITOS</div>
            </NavLink>
          </li>

          <li className='pesquisa'>
            <NavLink to={"/pesquisa"} className={paginaSelecionada("/pesquisa")}>
            <img src={loupe} alt="loupe" />
            </NavLink>
          </li>
          
          {logado ? 
          (
            <li>
              <div className='minha-conta'> 
                <NavLink to={pageAtual} className={paginaSelecionada("/dados")} onClick={PopUp}>
                  MINHA CONTA
                  {mostrarPopUp ? 
                  (
                    <div className={mostrarPopUp? 'pop-up-on' : 'pop-up'}>
                      <button className='botao-genero' onClick={() => window.location.href = '/dados-detalhes-conta'}>DADOS</button>
                      <button className='botao-genero' onClick={Deslogar}>SAIR</button>
                    </div>
                  ) : null}
                </NavLink>
              </div>
            </li>
          ) : (
            <li>
              <NavLink to={"/login"}>
                <button className='botao-genero'> ENTRAR </button> 
              </NavLink>
              <NavLink to={"/registro"}>
                <button className='botao-genero'> REGISTRAR </button>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
     </header>
  )
}

export default Header