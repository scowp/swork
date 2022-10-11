import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Logincadastro from "./pages/Logincadastro";
import Login from "./components/Login";

import loginimage from "./img/login-img.png"
import Cadastropessoais from "./components/Cadastropessoais";
import Cadastroendereco from "./components/Cadastroendereco";
import Cadastroformacao from "./components/Cadastroformacao";
import Cadastroskills from "./components/Cadastroskills";
import Cadastroexperiencia from "./components/Cadastroexperiencia";
import Cadastrocursos from "./components/Cadastrocursos";
import Cadastroresume from "./components/Cadastroresume";
import Cadastrofinalizado from "./components/Cadastrofinalizado";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Logincadastro image={loginimage} titulo={"Olá, bem-vindo novamente! "}><Login/></Logincadastro>}/>
          <Route path="/cadastro-pessoais" element={<Logincadastro image={loginimage} titulo={"Preencha corretamente com suas informações para criar sua conta"}><Cadastropessoais/></Logincadastro>}/>
          <Route path="/cadastro-endereco" element={<Logincadastro image={loginimage} titulo={"Legal! Agora precisamos saber aonde reside"}><Cadastroendereco/></Logincadastro>}/> 
          <Route path="/cadastro-formacao" element={<Logincadastro image={loginimage} titulo={"Otimo! Agora precisamos da sua formação"}><Cadastroformacao/></Logincadastro>}/>
          <Route path="/cadastro-skills" element={<Logincadastro image={loginimage} titulo={"Ok! Agora nos informe algumas de suas habilidades!"}><Cadastroskills/></Logincadastro>}/>
          <Route path="/cadastro-experiencia" element={<Logincadastro image={loginimage} titulo={"Você tem experiencia?"}><Cadastroexperiencia/></Logincadastro>}/>
          <Route path="/cadastro-cursos" element={<Logincadastro image={loginimage} titulo={"Já está quase acabando!! Se desejar cadastre algum de seus cursos"}><Cadastrocursos/></Logincadastro>}/>
          <Route path="/cadastro-resume" element={<Logincadastro image={loginimage} titulo={"Ultimo passo! Conte um pouco sobre você para que a gente te conheça melhor! =D"}><Cadastroresume/></Logincadastro>}/>
          <Route path="/cadastro-loading" element={<Logincadastro image={loginimage} titulo={"Sucesso =D!"}><Cadastrofinalizado/></Logincadastro>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
