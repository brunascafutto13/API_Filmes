import './Botao.css'

const Botao = (props) => {
    return(
        <button className="botao"><span className='texto-botao'>{props.children}</span></button>
    )
}

export default Botao;