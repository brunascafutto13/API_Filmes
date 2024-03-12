import { useState } from 'react';
import logo from '../../components/imagens/LOGO.png';
import Botao from '../../components/Botao';
import CampoTextoLogin from '../../components/CampoTextoLogin';
import Footer from '../../components/Footer';
import './style.css'

const AlterarSenha = () => {

    const [novaSenha, setNovaSenha] = useState([])

    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const mudaSenha = (senhas) => {
        if(senhas.senha !== senhas.confirmarSenha){
            alert('Senhas não correspondem!');
        }
        else{
            setNovaSenha([...novaSenha, senhas]);
            console.log(senhas);
        }
    }

    const aoEnviar = (evento) => {
        evento.preventDefault(); // Segura o reload da página.
        const senhas = {
            senha,
            confirmarSenha
        };
        mudaSenha(senhas);
    }

    return(
        <div className='fundoDegrade-img'>
            <div className='tela-login'>
                <div className='logo-altera'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='formulario-login'>
                    <form onSubmit={aoEnviar}>
                    <CampoTextoLogin 
                        placeholder="NOVA SENHA" 
                        obrigatorio={true} 
                        aoAlterado={senha => setSenha(senha)}
                        tipo={'text'}
                    />
                    <CampoTextoLogin 
                        placeholder="CONFIRMAR NOVA SENHA" 
                        obrigatorio={true} 
                        aoAlterado={confirmarSenha => setConfirmarSenha(confirmarSenha)}
                        tipo={'text'}
                    />
                    <Botao>ENVIAR</Botao>
                    </form>
                </div>
                <div className ='SpaceAS'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default AlterarSenha;