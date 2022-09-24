import logo from "../img/swork-side.png"

import { Link } from "react-router-dom"

export default function Header(){

    return(
        <nav>
            <img src={logo}/>
            <ul>
                <Link to="/login">
                    <li>Entrar</li>
                </Link>
                <Link to="/cadastro-pessoais">
                    <li>Cadastrar</li>
                </Link>
            </ul>
        </nav>
    )
}