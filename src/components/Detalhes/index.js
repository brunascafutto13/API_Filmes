import { getAllByDisplayValue } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './style.css'

const getDetails =async () => {

  const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

        
  try {
      // Fazendo a requisição
      const response = await fetch(basic_path+ '/getUserInfo', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              },
      
          });
      // Verificando se a requisição foi bem-sucedida
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }else{

         const data = await response.json()
         console.log(data)
         return data
      }
  } catch (error) {
      console.error("Houve um erro desconhecido", error);
      return [];
  }

}

const Detalhes = () => {
  const [detalhes, setDetalhes] = useState({ email: '', telefone: '' });

  useEffect(() => {
    async function fetchDetails() {
      const resposta = await getDetails();
      setDetalhes(resposta);
    }
    
    fetchDetails();
  }, []); // O array vazio indica que este useEffect será executado apenas uma vez, após o primeiro render

  return (
    <section className="formulario">
      <form>
        <div className="detalhesTexto">
          <div className='label-input'>
            <label> E-MAIL REGISTRADO </label>
            <input value={detalhes.email} readOnly />
          </div>
          <div className='label-input'>
            <label> CELULAR REGISTRADO </label>
            <input value={detalhes.telefone} readOnly />
          </div>
        </div>
      </form>
    </section>
  );
}
export default Detalhes; 