import Header from '../Header';
import Formulario from '../Formulario';
import './Fundo.css'; // Importa o arquivo de estilo CSS
import Carrossel from '../Carrossel';
import Footer from '../Footer';
import Dados from '../Dados';

const Fundo = () => {
  return (
    <div className="fundoDegrade">
      <div className="header-container">
      <Header/>
      </div>
        <Carrossel/>
      
      <div className="formulario-container">
      <Formulario
      label1 = "NOVA SENHA" placeholder1 = "xxxxxxxxxx"
      label2 = "CONFIRMAR NOVA SENHA" placeholder2 = "xxxxxxxxxx"
      label3 = "SENHA ATUAL" placeholder3 = "xxxxxxxxxx"
      />
      </div>

      <div className="formulario2-container">
      <Formulario
      label1 = "NOVO E-MAIL" placeholder1 = "xxxx@gmail.com"
      label2 = "CONFIRMAR NOVO E-MAIL" placeholder2 = "xxxxx@gmail.com"
      label3 = "SENHA" placeholder3 = "xxxxxxxxxx"
      />
      </div>

      <div className="formulario3-container">
      <Formulario
      label1 = "E-MAIL REGISTRADO" placeholder1 = "xxxx@gmail.com"
      label2 = "PAÍS DE ORIGEM" placeholder2 = "Brasil"
      label3 = "DATA DE NASCIMENTO" placeholder3 = "XX/XX/XXXX"
      />
      </div>
      <Dados/>
      <Footer/>
      
    </div>
  );
}

export default Fundo;
