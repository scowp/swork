import styled from "styled-components"
import logo from "../img/logo-swork.png"
import bg from "../img/login-bg.png"

export default function Logincadastro(props){

    const Main = styled.main`
        display: flex;
        justify-content: space-between;
        .image-area {
            width: 100vh;
            height: 100vh;
            background: url(${bg}) no-repeat left;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .input-area {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .logo{
            width: 15%;
        }

        h2 {
            margin: 20px 0px;
            font-size: 16px;
            width: 250px;
            text-align: center;
        }

    `

    return(
        <Main>
            <section className="image-area">
                <img src={props.image}/>        
            </section>
            <section className="input-area">
                <img className="logo" src={logo}/>
                <h2>{props.titulo}</h2>
                {props.children}
            </section>
        </Main>
    )
}