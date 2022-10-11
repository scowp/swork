import { Link } from "react-router-dom"

export default function Cadastroformacao(){

    return(
        <form>
            <label>Nome da instituição</label>
            <input type="text" />
            <label>Tipo de escolaridade</label>
            <input type="text" />
            <input type="checkbox" />
            <label>Completo?</label>
            <label>Data final</label>
            <input type="date" />
            <Link to="/cadastro-skills"><button className="btn">Continuar</button></Link>
        </form>
    )
}