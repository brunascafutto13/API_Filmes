import { useState, useEffect } from 'react';
import logo from '../../components/imagens/LOGO.png';
import Botao from '../../components/Botao';
import CampoTextoLogin from '../../components/CampoTextoLogin';
import Footer from '../../components/Footer';
import './style.css'
import { useAuth } from '../../components/AuthContext/AuthContext';

// Firebase
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth } from './firebase.js';

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
    googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    const facebookProvider = new FacebookAuthProvider();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { logado, setLogado } = useAuth();

    const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app";

    useEffect(() => {
        const verificarRedirecionamento = async () => {
            try {
                const result = await getRedirectResult(auth);
                
                if (result && result._tokenResponse) {
                    const token = result._tokenResponse.idToken || result._tokenResponse.oauthAccessToken;
                    let endpoint = '';
                    
                    if (result.providerId === 'google.com') {
                        endpoint = '/loginGoogle';
                    } else if (result.providerId === 'facebook.com') {
                        endpoint = '/loginFacebook';
                    }
                    
                    const response = await fetch(basic_path + endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ token })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    } else {
                        console.log(`Login com ${endpoint === '/loginGoogle' ? 'Google' : 'Facebook'} realizado com sucesso`);
                        setLogado(true);
                        window.location.href = "/";
                    }
                }

            } catch (error) {
                console.error("Houve um erro com o login", error);
            }
        };

        verificarRedirecionamento();
    }, [basic_path, setLogado]);

    const aoEnviar = async (evento) => {
        evento.preventDefault();

        try {
            const response = await fetch(basic_path + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
                console.log("Login realizado com sucesso");
                setLogado(true);
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Houve um erro desconhecido", error);
            alert("Houve um erro no login");
        }
    }

    const loginComGoogle = async () => {
        try {
            await signInWithRedirect(auth, googleProvider);
        } catch (error) {
            console.error("Houve um erro ao tentar redirecionar para o Google", error);
        }
    }

    const loginComFacebook = async () => {
        try {
            await signInWithRedirect(auth, facebookProvider);
        } catch (error) {
            console.error("Houve um erro ao tentar redirecionar para o Facebook", error);
        }
    }

    return (
        <div className='fundoDegrade-img'>
            <div className='tela-login'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='formulario-login'>
                    <form onSubmit={aoEnviar}>
                        <CampoTextoLogin 
                            placeholder="EMAIL" 
                            obrigatorio={true} 
                            aoAlterado={setEmail}
                            tipo={'text'}
                        />
                        <CampoTextoLogin 
                            placeholder="SENHA" 
                            obrigatorio={true} 
                            aoAlterado={setSenha}
                            tipo={'password'}
                        />
                        <Botao>ENTRAR</Botao>
                    </form>
                    <div className='escrita'>
                        <span>ESQUECEU SUA SENHA? <a href='recupera-senha'> CLIQUE AQUI </a></span>
                        <span>SUA PRIMEIRA VEZ POR AQUI? <a href='registro'> CLIQUE AQUI </a> </span>
                        <span>OU</span>
                    </div>
                    <div className='importados'>
                        <img 
                            src='https://cdn-icons-png.flaticon.com/512/2504/2504739.png' 
                            alt='google' 
                            onClick={loginComGoogle}
                            style={{cursor: "pointer"}}
                        />
                        <img 
                            src='https://www.novaconcursos.com.br/portal/wp-content/uploads/2020/01/facebook-logo-redondo.png' 
                            alt='facebook' 
                            onClick={loginComFacebook}
                            style={{cursor: "pointer"}}
                        />
                    </div>
                </div>
                <div className='rodape'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Login;