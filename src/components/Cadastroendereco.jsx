import { Link } from "react-router-dom"

export default function Cadastroendereco(){

    return(
        <form>
            <label>CEP</label>
            <input type="number" />
            <label>Rua</label>
            <input type="text" />
            <label>Bairro</label>
            <input type="text" />
            <label>Cidade</label>
            <input type="text" />
            <label>Estado</label>
            <input type="text" />
            <Link to="/cadastro-formacao"><button>Continuar</button></Link>
        </form>
    )
}