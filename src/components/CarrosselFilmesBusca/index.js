import React from 'react';
import './style.css';

const CarrosselFilmes = (props) => {
  const { data, AbrirPop } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w400/`;

  const handleImageClick = (item) => {
    AbrirPop(item);
  };

  return (
    <div className="lista">
      {data.map((item, index) => (
        <div className="list-item" key={index}>
          <div className="pointer" onClick={() => handleImageClick(item)}>
            <img
              src={imageUrl + item.poster_path}
              alt={`lista_${index}`}
            />
          </div>
          <p>{item.titulo}</p>
        </div>
      ))}
    </div>
  );
};

export default CarrosselFilmes;
