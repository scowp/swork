import { Link } from "react-router-dom"

export default function Login(){

    return(
        <div>
            <form>
                <label>Email:</label>
                <input type="text" />
                <label>Senha: </label>
                <input type="password"/>
                <input type="checkbox"/>
                <label>Lembrar usuário</label>
                <a href="#">Esqueci minha</a>
                <button>Entrar</button>
            </form>
            <span>Caso não tenha  um acesso, clique no botão abaixo para criar uma nova conta!</span>
            <Link to="/cadastro-pessoais"><button>Criar Conta</button></Link>
        </div>
    )
}