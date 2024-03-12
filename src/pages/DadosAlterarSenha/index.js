import Dados from "../../components/Dados";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import './style.css'
import CampoTexto from "../../components/CampoTexto";

const DadosAlterarSenha = () => {
    const [dadosSenha, setDadosSenha] = useState([]);

    const [senha, setSenha] = useState([]);
    const [confSenha, setconfSenha] = useState([]);
    const [senhaAtual, setSenhaAtual] = useState('');
    const CriaDados = async () => {

        const basic_path = "https://api-2nwlsfl2uq-uw.a.run.app"

        const novaSenha = senha
        try {
            // Fazendo a requisição
    
            // console.log(JSON.stringify({senhaAtual, novaSenha}))
            const response = await fetch(basic_path+ '/changePassword', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({senhaAtual, novaSenha})
                });
        
                
            // Verificando se a requisição foi bem-sucedida
            if (!response.ok) {
                alert('Não foi possível redefinir a senha')
                throw new Error(`HTTP error! Status: ${response.status}`);
            }else{
    
                console.log("Senha alterada com sucesso")
                alert('Senha Atualizada')
            }
        } catch (error) {
            console.error("Houve um erro desconhecido", error);
            return [];
        }
    }

    const AoEnviar = (evento) => {
        evento.preventDefault(); // Segura o reload da página
        if(senha !== confSenha){
            alert('SENHAS NÃO CORRESPONDEM');
        }
        else{
            if(senhaAtual === ''){
                alert('INSIRA SUA SENHA ATUAL')
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
            <section className="formulario">
                <form>
                    <CampoTexto label='NOVA SENHA' placeholder='XXXXXXXXX' aoAlterado={senha => setSenha(senha)} obrigatorio={true} />
                    <CampoTexto label='CONFIRMAR NOVA SENHA' placeholder='XXXXXXXXX' aoAlterado={confSenha => setconfSenha(confSenha)} obrigatorio={true}/>
                    <CampoTexto label='SENHA ATUAL' placeholder='XXXXXXXXX' aoAlterado={senhaAtual => setSenhaAtual(senhaAtual)} obrigatorio={true}/>
                </form>
            </section>
            <div className="botoes-dados">
                <button className='botao-dados' onClick={() => window.location.href = '../recupera-senha'}> RECUPERAR SENHA ATUAL</button>
                <button className='botao-dados' onClick={AoEnviar}> SALVAR DADOS</button>
            </div>
       </div>
       
        
        
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </div>
    );
  }
  
  export default DadosAlterarSenha;