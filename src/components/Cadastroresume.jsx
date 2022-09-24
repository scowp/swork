import { Link } from "react-router-dom"
 
export default function Cadastroresume(){

return(
    <form>
        <textarea cols="70" rows="25"></textarea>
        <Link to="/cadastro-loading"><button>Finalizar!</button></Link>
    </form>
)
}