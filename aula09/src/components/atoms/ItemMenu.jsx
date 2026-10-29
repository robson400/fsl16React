import { Link } from "react-router-dom"

const ItemMenu = ({href, item})=>{
    return(
        <li>
            <Link to={href}>{item}</Link>
        </li>
    )
}

export default ItemMenu