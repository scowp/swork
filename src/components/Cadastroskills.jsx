import { Link } from "react-router-dom"

export default function Cadastroskills(){

    return(
        <form>
            <label>Skill</label>
            <select>
                <option value="valor1">Javascript</option>
                <option value="valor2">HTML</option>
                <option value="valor3">CSS</option>
                <option value="valor4">Java</option>
                <option value="valor4">SQL</option>
            </select>
            <label>Nível de proficiência</label>
            <select>
                <option value="avancada">Avançado</option>
                <option value="intermediario">Intermediario</option>
                <option value="iniciante">Iniciante</option>
            </select>
            <button>Adicionar habilidade</button>
            <div>Mostra hard skills</div>
            <div>Mostra soft skills</div>
            <Link to="/cadastro-experiencia"><button>Continuar</button></Link>
        </form>
    )
}