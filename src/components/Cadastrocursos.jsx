import { Link } from "react-router-dom"

export default function Cadastrocursos(){

    return(
        <form action="">
            <input type="checkbox"/>
            <label></label>
            <label>Nome da certificação</label>
            <input type="text" />
            <label>Emissora do certificado</label>
            <input type="text" />
            <label>Data de emissão</label>
            <input type="date"/>
            <label>Data de expiração</label>
            <input type="date" />
            <input type="checkbox"/>
            <label>Curso sem data de expiração</label>
            <label>Link de certificação</label>
            <input type="url"/>
            <label>Credencial</label>
            <input type="number"/>
            <Link to="/cadastro-resume"><button>Continuar</button></Link>
        </form>
    )
}