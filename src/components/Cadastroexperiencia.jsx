import { Link } from "react-router-dom"

export default function Cadastroexperiencia(){

    return(
        <form>
            <input type="checkbox"/>
            <label></label>
            <label>Nome da empresa</label>
            <input type="text" />
            <label>Área de atuação</label>
            <input type="text" />
            <label>Cargo exercicido</label>
            <input type="text" />
            <label>Tempo de empresa</label>
            <input type="text" />
            <Link to="/cadastro-cursos"><button>Continuar</button></Link>
        </form>
    )
}