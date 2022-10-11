import logo from "../img/swork-side.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header(){

    const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F4F4F4;
    height: 85px;

    ul {
        display: flex;
        align-items: center;
    }

    li {
        margin-right: 20px;
        color: black;
        font-weight: 500;
        transition: color 0.2s;
    }

    li:hover {
        color: #0568FD;
    }


    img {
        width: 10%;
        margin-left: 32%;
    }

    button {
        cursor: pointer;
        background-color: #0568FD;
        color: white;
        border: none;
        padding: 10px 40px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #134da5;
    }

`

    return(
        <Nav>
            <img src={logo}/>
            <ul>
                <Link to="/login">
                    <li>Entrar</li>
                </Link>
                <Link to="/cadastro-pessoais">
                    <button>Cadastrar</button>
                </Link>
            </ul>
        </Nav>
    )
}