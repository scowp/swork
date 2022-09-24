import { Link } from "react-router-dom"

export default function Cadastropessoais(){

    return(
        <form>
            <label>Nome</label>
            <input type="text" />
            <label>Data de nascimento</label>
            <input type="date"/>
            <label>Sexo</label>
            <select>
                <option value="valor1">Feminino</option>
                <option value="valor2">Masculino</option>
                <option value="valor3">Outros</option>
                <option value="valor4">Não informar</option>
            </select>
            <Link to="/cadastro-endereco"><button>Continuar</button></Link>
        </form>
    )
}