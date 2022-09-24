import logo from "../img/logo-swork.png"

export default function Logincadastro(props){

    return(
        <>
            <section>
                <img src={props.image}/>        
            </section>
            <section>
                <img src={logo}/>
                <h2>{props.titulo}</h2>
                {props.children}
            </section>
        </>
    )
}