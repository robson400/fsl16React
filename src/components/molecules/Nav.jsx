import ItemMenu from "../atoms/ItemMenu.jsx"

const Nav = ({itens})=>{

    return (
        <nav>
            <ul>
                {
                    itens.map(i =>{
                        return <ItemMenu href={i.href} item={i.item} />
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav