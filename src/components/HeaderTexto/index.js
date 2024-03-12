import './HeaderTexto.css'
const HeaderTexto = (props) =>{
    return(
        <div className="header-texto">
            <label> {props.label} </label>
        </div>
    )
}
export default HeaderTexto