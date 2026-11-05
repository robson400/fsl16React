import { Link } from "react-router-dom"
import Nav from "../../molecules/Nav.jsx"
import Logo from "../../atoms/Logo.jsx"

const Header = ()=>{
 
    const itens = [
        {id: 1, href: "/home", item: "Home"},
        {id: 2, href: "/produtos", item: "Produtos"},
        {id: 3, href: "/tarefas", item: "Tarefas"},
        {id: 4, href: "/contato", item: "Contato"},
    ]

    return(
        <header>
            <div className="container">
                <Logo />
                <Nav itens={itens} />
                <Link to="/login" className="login">
                    <span>Olá,</span>Faça seu Login.
                </Link>
            </div>
        </header>
    )
}

export default Header