import Acesso from "../components/Acesso";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import Suporte from "../components/Suporte";

export default function Home(){
    return(
        <>
            <Header/>
            <Acesso/>
            <Sobre/>
            <Suporte/>
            <Footer/>
        </>
    )
}