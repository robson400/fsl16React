import Nav from "../../molecules/Nav.jsx"
import Logo from "../../atoms/Logo.jsx"

const Header = ()=>{
 
    const itens = [
        {href: "#home", item: "Home"},
        {href: "#produtos", item: "Produtos"},
        {href: "#tarefas", item: "Tarefas"},
        {href: "#contato", item: "Contato"},
    ]

    return(
        <header>
            <div className="container">
                <Logo />
                <Nav itens={itens} />
            </div>
        </header>
    )
}

export default Header