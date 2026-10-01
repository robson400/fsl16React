import "./Header.css"
import LogoDigital from "./assets/images/logo-digital.png"

const Header = ()=>{
    return(
        <header>
            <img src={LogoDigital} alt="Logo Digital College" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header