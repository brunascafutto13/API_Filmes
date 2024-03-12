import CampoTexto from "../../components/CampoTexto";
import Dados from "../../components/Dados";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import './style.css'

const DadosAlterarEmail = () => {
    
    const [dadosEmail, setDadosEmail] = useState([]);

    const [email, setEmail] = useState([]);
    const [confEmail, setconfEmail] = useState([]);
    const [senha, setSenha] = useState('');

    const CriaDados = async () => {
        const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

        try {
            const response = await fetch(basic_path + '/changeEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({novoEmail: email, senha: senha})
            });
        
            if (!response.ok) {
                if (response.status === 500) {
                    alert('Senha incorreta');
                } else {
                    alert('Não foi possível redefinir o email');
                }
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else {
    
                console.log("Email alterado com sucesso")
                alert('Email atualizado')
            }

        } catch (error) {
            console.error("Houve um erro desconhecido", error);
            return [];
        }

        const dadoEmail ={
            email,
            confEmail,
            senha
        };
        setDadosEmail([...dadosEmail, dadoEmail]);
        console.log(dadoEmail);
        
    }

    const AoEnviar = (evento) => {
        evento.preventDefault(); // Segura o reload da página
        if(email !== confEmail){
            alert('Emails não correspondem');
        }
        else{
            if(senha === ''){
                alert('Insira sua senha');
            }
            else{
                CriaDados();
            }
        }
    }

    return (
        <div className="fundoDegrade">
            <Header/>
            <div className="conteudo">
                  
                <div className="dados-container">
                    <Dados/>
                </div>
            
                <div className="formulario-container">
                    <div>
                        <section className="formulario">
                            <form>
                                <CampoTexto label='NOVO E-MAIL' placeholder='XXXXXXXX@GMAIL.COM' aoAlterado={email => setEmail(email)} />
                                <CampoTexto label='CONFIRMAR NOVO E-MAIL' placeholder='XXXXXXXX@GMAIL.COM' aoAlterado={confEmail => setconfEmail(confEmail)}/>
                                <CampoTexto label='SENHA' placeholder='XXXXXXXXXXXXXXXXX' aoAlterado={senha => setSenha(senha)}/>
                            </form>
                        </section>
                        <div className="salvar-senha">
                            <button className='botao-dados' onClick={AoEnviar}> SALVAR DADOS</button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="footer"> 
                <Footer/>
            </div>

        </div>
    );
  }
  
  export default DadosAlterarEmail;