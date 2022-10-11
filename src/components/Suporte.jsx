import styled from "styled-components"
import image from "../img/support-image.svg"

export default function Suporte(){

    const Section = styled.section`
        display: flex;
        justify-content: space-around;
        margin: 90px 0px;

        h2 {
            font-size: 32px;
        }

        .info {
            width: 500px;
        }
    `

    return(
        <div className="container">
            <Section>
                <img src={image}/>
                <div className="info">
                    <h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque nunc id erat elementum, ut bibendum turpis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </Section>
        </div>
    )
}