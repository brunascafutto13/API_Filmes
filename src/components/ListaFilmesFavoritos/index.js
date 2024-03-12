import React from 'react';
import './style.css';

const ListaFilmesFavoritos = ({favoritos, AbrirPop}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w400/`;

  const handleImageClick = (item) => {
    AbrirPop(item);
  };

  return (
    <div className="lista">
      {favoritos.map((item, index) => (
        <div className="list-item" key={index}>
          <div className="pointer" onClick={() => handleImageClick(item)}>
            <img
              src={imageUrl + item.poster_path}
              alt={`favoritos_${index}`}
            />
          </div>
          <p>{item.titulo}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaFilmesFavoritos;
