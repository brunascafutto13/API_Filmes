import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação do useNavigate
import logo from '../../components/imagens/LOGO.png';
import Botao from '../../components/Botao';
import CampoTextoLogin from '../../components/CampoTextoLogin';
import Footer from '../../components/Footer';
import './style.css'


const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

const RecuperarSenha = () => {
    const navigate = useNavigate(); // Chama o hook useNavigate para obter a função navigate
    const mandarEmail = async (recupera) => {
        try {
            // Fazendo a requisição
            const response = await fetch(basic_path + '/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: recupera.email })
            });
    
            // Verificando se a requisição foi bem-sucedida
            if (!response.ok) {
                alert('Email não encontrado!')
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                console.log("Email de redefinição de senha enviado com sucesso")
                alert('Email de redefinição de senha enviado com sucesso')
                navigate('/');
            }
        } catch (error) {
            console.error("Houve um erro desconhecido", error);
            return [];
        }
    }

    const aoEnviar = (evento) => {
        evento.preventDefault(); // Segura o reload da página.
        const recupera = {
            email
        };
        mandarEmail(recupera);
    }

    const [email, setEmail] = useState('');

    return(
        <div className='fundoDegrade-img'>
            <div className='tela-login'>
                <div className='logo-recupera'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='formulario-login'>
                    <form onSubmit={aoEnviar}>
                    <CampoTextoLogin 
                        placeholder="EMAIL" 
                        obrigatorio={true} 
                        aoAlterado={email => setEmail(email)}
                        tipo={'text'}
                    />
                    <Botao>ENVIAR</Botao>
                    </form>
                </div>
                <div className='rodape'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default RecuperarSenha;