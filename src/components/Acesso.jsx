import image from "../img/slider-image.svg"

export default function Acesso(){

    return(
        <section>
            <h1>Plataforma de recrutamento expresso de candidatos.</h1>
            <p>Tenha uma maior facilidade para entrar em contato com a empresa que você mais se encaixa!</p>
            <button>Acessar</button>
            <button>Sobre</button>
            <img src={image}/>
        </section>
    )
}