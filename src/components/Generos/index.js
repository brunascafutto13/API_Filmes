import './style.css'
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Generos = (props) =>{
    const [ativo, setAtivo] = useState(null); // manter o botao clicado com o estilo ativo

    const botaoClick = (genero) => {
        if(ativo === genero){
        genero='titulos';
        setAtivo(null);
    }
    else{
        setAtivo(genero); //seta o genero ativo para o genero do botao clicado.
    }
    props.Clique(genero);
};

    return(
        <div className="generos"> 
            <div onClick={() => botaoClick('Animação')} className="navLink">
                <button className={ativo === 'Animação' ? 'clicado' : 'botao-genero'}> ANIMAÇÃO</button>
            </div>

            <div onClick={() => botaoClick('Aventura')} className="navLink">
                <button className={ativo === 'Aventura' ? 'clicado' : 'botao-genero'}> AVENTURA </button>
            </div>

            <div onClick={() => botaoClick('Ação')} className="navLink">
                <button className={ativo === 'Ação' ? 'clicado' : 'botao-genero'}> AÇÃO</button>
            </div>

            <div onClick={() => botaoClick('Comédia')} className="navLink">
                <button className={ativo === 'Comédia' ? 'clicado' : 'botao-genero'}> COMÉDIA</button>
            </div>

            <div onClick={() => botaoClick('Drama')} className="navLink">
                <button className={ativo === 'Drama' ? 'clicado' : 'botao-genero'}> DRAMA</button>
            </div>

            <div onClick={() => botaoClick('Família')} className="navLink">
                <button className={ativo === 'Família' ? 'clicado' : 'botao-genero'}> FAMÍLIA</button>
            </div>

            <div onClick={() => botaoClick('Ficção científica')} className="navLink">
                <button className={ativo === 'Ficção científica' ? 'clicado' : 'botao-genero'}> FICÇÃO</button>
            </div>

            <div onClick={() => botaoClick('Terror')} className="navLink">
                <button className={ativo === 'Terror' ? 'clicado' : 'botao-genero'}> TERROR</button>
            </div>
        </div>
    )
}

export default Generos;