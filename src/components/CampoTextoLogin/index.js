import './CampoTextoLogin.css'

const CampoTextoLogin = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <input 
            className="campo-texto-login" 
            placeholder={props.placeholder} 
            required={props.obrigatorio}
            onChange={aoDigitado}
            type={props.tipo}
        />
    );
}

export default CampoTextoLogin;