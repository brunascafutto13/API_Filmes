import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import setaL from '../imagens/seta_esq.png';
import setaD from '../imagens/seta_dir.png';
import './style.css';

const CarrosselFilmes = (props) => {
  const { AbrirPop } = props;
  const car = useRef();
  const [currentX, setCurrentX] = useState(0);
  const [clicksSetaL, setClicksSetaL] = useState(0);

  const controls = useAnimation();

  const [carrosselData, setCarrosselData] = useState([]);
  const [mostrarBotoes, setMostrarBotoes] = useState(false); // Inicialmente, não mostrar os botões

// ...

useEffect(() => {
  const apiUrl = 'https://api-2nwlsfl2uq-uw.a.run.app';

  fetch(apiUrl + "/getTitulos?tipo=" + props.tipo + "&ano=" + props.ano + "&genero=" + props.genero)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível buscar os dados da API');
      }
      return response.json();
    })
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setCarrosselData(data);
        setMostrarBotoes(data.length > 5); // Mostrar os botões apenas se houver mais de 5 itens
      } else {
        console.error('Dados da API vazios ou não no formato esperado.');
      }
    })
    .catch((error) => {
      console.error('Erro ao buscar dados da API:', error);
    });
}, [props.tipo, props.ano, props.genero]);



  const handleScroll = (percentage) => {
    const containerWidth = car.current.offsetWidth;
    const scrollAmount = (containerWidth * (percentage / 100));
    const newCurrentX = currentX + scrollAmount;

    controls.start({
      x: newCurrentX,
      transition: {
        duration: 0.5, // Duração da animação em segundos
        ease: 'easeInOut', // Tipo de easing
        delay: 0, // Atraso em segundos
        opacity: 1, // Opacidade final
        scale: 1, // Escala final
      },
    });

    setCurrentX(newCurrentX);

    if (percentage < 0) {
      setClicksSetaL(clicksSetaL + 1);
    } else if (percentage > 0 && clicksSetaL > 0) {
      setClicksSetaL(clicksSetaL - 1);
    }
  };

  const imageUrl = `https://image.tmdb.org/t/p/w400/`;

  const handleImageClick = (item) => {
    AbrirPop(item);
  };

  return (
    <div className="carrossel" ref={car}>
      <motion.div
        className="interno"
        style={{ transform: `translateX(${currentX}px)` }}
        animate={controls}
      >
        {carrosselData.map((item, index) => (
          <div className="iten" key={index}>
            <div onClick={() => handleImageClick(item)}>
              <img
                src={imageUrl + item.poster_path}
                alt={`carrossel_${index}`}
              />
            </div>
            <p>{item.titulo}</p>
          </div>
        ))}
      </motion.div>
      {mostrarBotoes && (
        <>
          {clicksSetaL > 0 && (
            <div className="button-left" onClick={() => handleScroll(88)}>
              <img src={setaL} alt="Seta esquerda" />
              &lt;
            </div>
          )}
          <div className="button-right" onClick={() => handleScroll(-88)}>
            <img src={setaD} alt="Seta direita" />
            &gt;
          </div>
        </>
      )}
    </div>
  );
};

export default CarrosselFilmes;
