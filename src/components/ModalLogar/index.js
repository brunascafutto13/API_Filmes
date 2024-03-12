import './style.css'

const ModalLogar = ({FecharModal, nome}) =>{
    
    const Sair = (e) => {
        if(e.key === 'Escape'){
            FecharModal();
        }
    }

    return(
        <div className='fundoDegrade-pop modal' tabIndex="0" onKeyDown={Sair}>
            <div className={'conteudo-modal'}>
                <span>{nome}</span>
                <div className='botoes-modal'>
                    <button onClick={() => window.location.href = '../login'}>ENTRAR</button>
                    <button onClick={() => window.location.href = '../registro'}>REGISTRAR</button>
                </div>
            </div>
        </div>
    );
}

export default ModalLogar;