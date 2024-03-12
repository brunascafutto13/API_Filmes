import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import DadosAlterarSenha from './pages/DadosAlterarSenha';
import DadosAlterarEmail from './pages/DadosAlterarEmail';
import DadosDetalhesConta from './pages/DadosDetalhes';
import Login from './pages/Login';
import Registro from './pages/Registro';
import RecuperarSenha from './pages/RecuperarSenha';
import Home from './pages/Home';
import AlterarSenha from './pages/AlterarSenha';
import Favoritos from './pages/Favoritos';
import PopUpTitulo from './pages/PopUpTitulo';
import Pesquisa from './pages/Pesquisa';
import Filmes from './pages/Filmes';
import Series from './pages/Series';

function AppRouter() {
  return (    
      <Routes>
        <Route path="/dados-alterar-senha" element={<DadosAlterarSenha/>}/>
        <Route path="/dados-alterar-email" element={<DadosAlterarEmail/>}/>
        <Route path="/dados-detalhes-conta" element={<DadosDetalhesConta/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/recupera-senha" element={<RecuperarSenha/>}/>
        <Route path="/alterar-senha" element={<AlterarSenha/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/pesquisa" element={<Pesquisa/>}/>
        <Route path="/pop-up-titulos" element={<PopUpTitulo/>}/>
        <Route path="/filmes" element={<Filmes/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/animacao" element={<Home genero='Animação'/>}/>
        <Route path="/aventura" element={<Home genero='Aventura'/>}/>
        <Route path="/acao" element={<Home genero='Ação'/>}/>
        <Route path="/comedia" element={<Home genero='Comédia'/>}/>
        <Route path="/drama" element={<Home genero='Drama'/>}/>
        <Route path="/familia" element={<Home genero='Família'/>}/>
        <Route path="/ficcao" element={<Home genero='Ficção científica'/>}/>
        <Route path="/terror" element={<Home genero='Terror'/>}/>
        
      </Routes>
      
  );
}

export default AppRouter;
