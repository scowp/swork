import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Cadastropessoais(){

    const Form = styled.form`
        display: flex;
        flex-direction: column;
    `

    return(
        <Form>
            <label>Nome</label>
            <input type="text" placeholder="Nome"/>
            <label>Data de nascimento</label>
            <input type="date"/>
            <label>Sexo</label>
            <select>
                <option value="valor1">Feminino</option>
                <option value="valor2">Masculino</option>
                <option value="valor3">Outros</option>
                <option value="valor4">Não informar</option>
            </select>
            <label>Email</label>
            <input type="email" placeholder="Email"/>
            <label>Senha</label>
            <input type="password" placeholder="Senha"/>
            <Link to="/cadastro-endereco"><button className="btn">Continuar</button></Link>
        </Form>
    )
}