import styled from "styled-components"
import bg from "../img/abot-bg.png"

export default function Sobre(){

    const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        background: url(${bg}) center no-repeat;
        background-size: cover;
        padding-top: 200px;
        height: 1000px;

        h2 {
            font-size: 32px;
            margin-bottom: 40px;
        }

        .tags {
            display: flex;
            justify-content: space-between;
            width: 60%;
        }

        .tag-info {
            width: 300px;
        }

        h4 {
            border-bottom: solid 4px #1f1a74;
            width: 200px;
        }

        .sobre {
            display: flex;
            justify-content: space-between;
            margin-top: 80px;
        }

        .sobre .para {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
        }

        h3 {
            font-size: 33px;
        }

        span {
            color: #1f1a74;
        }
    `

    return(
        <Section>
            <h2><span>F</span>acilidade ajuda o mundo!</h2>
            <div className="tags">
                <div className="tag-info">
                    <h4>Objetividade</h4>
                    <p>Entre em contato com recrutadores de maneira suuuper dinamica!</p>
                </div>
                <div className="tag-info">
                    <h4>Match</h4>
                    <p>O encontro do melhor candidato com melhor vaga!</p>
                </div>
                <div className="tag-info">
                    <h4>Bate-papo</h4>
                    <p>Aqui o processo é humano! Entre em contato com recrutadores de verdade!</p>
                </div>
            </div>
            <div className="container">
                <div className="sobre">
                    <h3><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                    <div className="para">
                        <p>Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.</p>
                        <p>Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}