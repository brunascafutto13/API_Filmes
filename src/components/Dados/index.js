import './Dados.css'
import { NavLink } from 'react-router-dom';
const Dados = () =>{
    return(
        <div className="dados"> 
        <span className="dados-text">DADOS </span>
           <NavLink to = "/dados-detalhes-conta" className="navLink"><button> DETALHES DA CONTA</button></NavLink>
           <NavLink to = "/dados-alterar-email" className="navLink"><button> ALTERAR EMAIL </button></NavLink>
           <NavLink to = "/dados-alterar-senha" className="navLink"><button> ALTERAR SENHA</button></NavLink>
            </div>
    )
}
export default Dados