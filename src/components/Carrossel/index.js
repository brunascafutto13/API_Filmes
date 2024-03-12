import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import img1 from '../imagens/bridgerton.jpeg';
import img2 from '../imagens/outerbanks.jpg';
import img3 from '../imagens/peakblinders.jpg';
import './Carrossel.css';

const imgs = [img1, img2, img3];

const Carrossel = () => {
  const car = useRef();
  const [width, setWidth] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    setWidth(car.current?.scrollWidth - car.current?.offsetWidth);
  }, []);

  const handleDrag = (e, info) => {
    setCurrentX(info.point.x);
  };

  const minPosition = 0;
  const maxPosition = -width;

  return (
    <motion.div className="carousel" whileTap={{ cursor: 'grabbing' }}>
      <motion.div
        ref={car}
        className="inner"
        drag="x"
        dragConstraints={{ right: minPosition, left: maxPosition }}
        onDrag={handleDrag}
        initial={{ x: 0 }}
        animate={{ x: currentX }}
        transition={{ duration: 0.8 }}
      >
        {imgs.map((image) => (
          <motion.div className="item" key={image}>
            <img src={image} alt="carousel" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carrossel;
