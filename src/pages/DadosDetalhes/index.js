import Dados from "../../components/Dados";
import Detalhes from "../../components/Detalhes";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './style.css'

const DadosDetalhesConta = () => {
    return (
        <div className="fundoDegrade">
        <Header/>
        <div className="conteudo">

        <div className="dados-container">
        <Dados/>
        </div>
       
        <div className="formulario-container">
       <Detalhes/>
       </div>
        
        
        </div>
        <div className="detalhes">
          <Footer/>
        </div>
        </div>
    );
  }
  
export default DadosDetalhesConta;