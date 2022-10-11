import image from "../img/slider-image.svg"
import styled from "styled-components"
import bg from "../img/slider-bg.png"

export default function Acesso(){

    const Section = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        background-image: url(${bg});
        background-size: cover;

        h1 {
            font-size: 42px;
            width: 700px;
        }

        p {
            width: 400px;
            font-weight: 400;
            margin: 20px 0px;
        }

        .btn-outline {
            cursor: pointer;
            background-color: transparent;
            color: #0568FD;
            border: solid 2px #0568FD;
            width: 170px;
            height: 40px;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 500;
            transition: background-color 0.2s;
        }

        .btn-outline:hover {
            background-color: #0568FD;
            color: white;
            border: solid 2px #0568FD;
        }

        img {
            width: 40%;
        }
    `


    return(
        <div className="container">
            <Section>
                <div>
                    <h1>Plataforma de recrutamento expresso de candidatos.</h1>
                    <p>Tenha uma maior facilidade para entrar em contato com a empresa que você mais se encaixa!</p>
                    <button className="btn">Acessar</button>
                    <button className="btn-outline">Sobre</button>
                </div>
                <img src={image}/>
            </Section>
        </div>
    )
}