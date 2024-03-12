import { useState } from 'react';
import './style.css'
import logo from '../../components/imagens/LOGO.png';
import Botao from '../../components/Botao';
import CampoTextoLogin from '../../components/CampoTextoLogin';
import Footer from '../../components/Footer';
const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

const Registro = () => {
    const [usuarios, setUsuario] = useState([])

    const [email, setEmail] = useState('');
    const [nome, setUser] = useState('');
    const [telefone, setTelefone] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [senha, setSenha] = useState('');

    const criaUsuario = async(usuario) => {
        if(usuario.senha !== usuario.confirmar){
            alert('Senhas não correspondem');
        }
        else{
            
            //INTEGRAÇÃO COM O BACKEND
           // console.log(JSON.stringify({email, senha, nome, telefone }))
            const response = await fetch(basic_path+ '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, senha, nome, telefone })
            });
            console.log(response)
            window.location.href = "/login";
        }
    }

    const aoEnviar = (evento) => {
        evento.preventDefault(); // Segura o reload da página.
        const usuario = {
            email,
            nome,
            telefone,
            senha,
            confirmar
        };
        criaUsuario(usuario);
    }

    return (
        <div className='fundoDegrade-img'>
            <div className='tela-login'>
                <div className='logo-registro'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='formulario-login'>
                    <form onSubmit={aoEnviar}>
                        <CampoTextoLogin 
                            placeholder="EMAIL" 
                            obrigatorio={true} 
                            aoAlterado={email => setEmail(email)}
                            tipo={'text'}
                        />
                        <CampoTextoLogin 
                            placeholder="NOME DE USUÁRIO" 
                            obrigatorio={true} 
                            aoAlterado={nome => setUser(nome)}
                            tipo={'text'}
                        />
                        <CampoTextoLogin 
                            placeholder="TELEFONE" 
                            obrigatorio={true} 
                            aoAlterado={telefone => setTelefone(telefone)}
                            tipo={'text'}
                        />
                        <CampoTextoLogin 
                            placeholder="SENHA" 
                            obrigatorio={true} 
                            aoAlterado={senha => setSenha(senha)}
                            tipo={'password'}
                        />
                        <CampoTextoLogin 
                            placeholder="CONFIRMAR SENHA" 
                            obrigatorio={true} 
                            aoAlterado={confirmar => setConfirmar(confirmar)}
                            tipo={'password'}
                        />
                        <Botao>REGISTRAR</Botao>
                    </form>
                </div>
                <div className='rodape'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Registro;