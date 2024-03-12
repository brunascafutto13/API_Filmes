import './style.css'

const Seletor = (props) => {
    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return(
        <select className='select-favoritos' onChange={aoSelecionado}>
            <option key='TODOS'>TODOS</option>
            <option key='FILMES'>FILMES</option>
            <option key='SERIES'>SERIES</option>
        </select>
    );
}

export default Seletor;